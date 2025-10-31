@echo off
REM Windows批处理文件，用于在WSL中启动Jekyll服务器

echo 正在启动Jekyll服务器...
echo 请确保WSL已安装并配置好Ruby和Jekyll环境

REM 在WSL中启动Jekyll服务器
wsl -e bash -c "cd /mnt/d/documents/genomics-in-healthcare.github.io && bundle exec jekyll serve --force_polling --host 0.0.0.0 --port 4000"

pause





