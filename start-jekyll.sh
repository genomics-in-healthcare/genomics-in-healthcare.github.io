#!/bin/bash
# WSL中启动Jekyll服务器的脚本

echo "正在启动Jekyll服务器..."
cd /mnt/d/documents/genomics-in-healthcare.github.io

# 检查是否安装了bundle
if ! command -v bundle &> /dev/null; then
    echo "错误: 未找到bundle命令，请先安装Ruby和Jekyll"
    echo "运行以下命令安装:"
    echo "sudo apt update"
    echo "sudo apt install ruby-full build-essential zlib1g-dev"
    echo "gem install bundler"
    echo "bundle install"
    exit 1
fi

# 检查Gemfile是否存在
if [ ! -f "Gemfile" ]; then
    echo "错误: 未找到Gemfile，请确保在正确的目录中"
    exit 1
fi

# 安装依赖（如果需要）
echo "检查并安装依赖..."
bundle install

# 清理并准备 _site 目录（使用 Windows 命令以避免权限问题）
echo "清理 _site 目录..."
if [ -d "_site" ]; then
    # 获取当前目录的 Windows 格式路径
    WINDOWS_PATH=$(wslpath -w "$(pwd)" 2>/dev/null || echo "")
    if [ -n "$WINDOWS_PATH" ]; then
        # 构建 _site 目录的完整路径
        SITE_PATH="${WINDOWS_PATH}\\_site"
        # 转义路径中的单引号（PowerShell 中单引号需要转义为两个单引号）
        # 这样可以防止路径中包含单引号时导致命令注入或语法错误
        SITE_PATH_ESCAPED=$(echo "$SITE_PATH" | sed "s/'/''/g")
        # 使用 Windows PowerShell 命令来删除目录，避免 WSL 权限问题
        # 使用转义的单引号来安全地传递路径
        powershell.exe -Command "if (Test-Path '${SITE_PATH_ESCAPED}') { Remove-Item -Recurse -Force '${SITE_PATH_ESCAPED}' -ErrorAction SilentlyContinue }"
    fi
    # 也尝试在 WSL 中删除（以防万一）
    rm -rf _site 2>/dev/null || true
fi

# 启动Jekyll服务器
echo "启动Jekyll服务器在 http://localhost:4000"
bundle exec jekyll serve --force_polling --host 0.0.0.0 --port 4000







