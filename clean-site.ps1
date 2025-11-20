# Jekyll _site 目录清理脚本 (Windows PowerShell)
# 使用方法: .\clean-site.ps1

$sitePath = Join-Path $PSScriptRoot "_site"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Jekyll _site 目录清理工具" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if (Test-Path $sitePath) {
    Write-Host "正在删除 _site 目录..." -ForegroundColor Yellow
    try {
        Remove-Item -Recurse -Force $sitePath -ErrorAction Stop
        Write-Host "✓ _site 目录已成功删除" -ForegroundColor Green
        Write-Host ""
        Write-Host "现在可以运行: bundle exec jekyll serve" -ForegroundColor Green
    } catch {
        Write-Host "✗ 删除失败: $_" -ForegroundColor Red
        Write-Host ""
        Write-Host "可能的原因:" -ForegroundColor Yellow
        Write-Host "  1. 文件被其他程序占用（编辑器、文件管理器）" -ForegroundColor Yellow
        Write-Host "  2. Windows Defender 正在扫描文件" -ForegroundColor Yellow
        Write-Host "  3. 权限不足" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "解决方案:" -ForegroundColor Yellow
        Write-Host "  1. 关闭 VS Code 或其他编辑器" -ForegroundColor White
        Write-Host "  2. 关闭文件管理器窗口" -ForegroundColor White
        Write-Host "  3. 临时关闭 Windows Defender 实时保护" -ForegroundColor White
        Write-Host "  4. 然后重新运行此脚本" -ForegroundColor White
        exit 1
    }
} else {
    Write-Host "✓ _site 目录不存在，无需清理" -ForegroundColor Green
}

Write-Host ""





