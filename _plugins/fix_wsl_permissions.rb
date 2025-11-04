# Jekyll 插件：修复 WSL 访问 Windows 文件系统时的权限问题
# 当 Jekyll 试图删除已存在的文件时，如果遇到权限错误，会继续执行而不是崩溃

module Jekyll
  class StaticFile
    alias_method :original_write, :write
    
    def write(dest)
      destination_path = destination(dest)
      
      # 如果目标文件已存在，尝试删除它
      if File.exist?(destination_path)
        begin
          FileUtils.rm(destination_path)
        rescue Errno::EACCES, Errno::EPERM => e
          # WSL 权限问题：如果删除失败，尝试使用 Windows 命令
          if destination_path.start_with?('/mnt/')
            # 转换路径格式：/mnt/d/path/to/file -> D:\path\to\file
            match = destination_path.match(%r{^/mnt/([a-z])/(.+)}i)
            if match
              windows_path = "#{match[1].upcase}:\\#{match[2].gsub('/', '\\')}"
            else
              windows_path = destination_path.sub(%r{^/mnt/([a-z])}i) { |m| "#{m[-1].upcase}:" }.gsub('/', '\\')
            end
            
            # 使用 PowerShell 移除只读属性并删除文件
            ps_cmd = "if (Test-Path '#{windows_path}') { $f = Get-Item '#{windows_path}' -Force; $f.IsReadOnly = $false; Remove-Item '#{windows_path}' -Force -ErrorAction SilentlyContinue }"
            system('powershell.exe', '-Command', ps_cmd)
            
            # 再次检查文件是否还存在
            if File.exist?(destination_path)
              Jekyll.logger.warn("无法删除文件 #{destination_path}，将尝试覆盖写入")
            end
          else
            Jekyll.logger.warn("无法删除文件 #{destination_path}: #{e.message}")
          end
        rescue => e
          Jekyll.logger.warn("删除文件时出错 #{destination_path}: #{e.message}")
        end
      end
      
      # 继续执行原始写入逻辑
      original_write(dest)
    rescue Errno::EACCES, Errno::EPERM => e
      # 如果写入时也遇到权限问题，尝试使用 Windows 命令设置权限
      if destination_path && destination_path.start_with?('/mnt/')
        # 转换路径格式：/mnt/d/path/to/file -> D:\path\to\file
        match = destination_path.match(%r{^/mnt/([a-z])/(.+)}i)
        if match
          windows_path = "#{match[1].upcase}:\\#{match[2].gsub('/', '\\')}"
        else
          windows_path = destination_path.sub(%r{^/mnt/([a-z])}i) { |m| "#{m[-1].upcase}:" }.gsub('/', '\\')
        end
        Jekyll.logger.warn("写入文件时遇到权限问题: #{destination_path}")
        
        # 尝试移除只读属性
        ps_cmd = "if (Test-Path '#{windows_path}') { $f = Get-Item '#{windows_path}' -Force; $f.IsReadOnly = $false }"
        system('powershell.exe', '-Command', ps_cmd)
        
        # 重试写入
        sleep 0.1  # 给文件系统一点时间
        retry
      else
        raise
      end
    end
  end
end

