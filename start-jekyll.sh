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

# 启动Jekyll服务器
echo "启动Jekyll服务器在 http://localhost:4000"
bundle exec jekyll serve --force_polling --host 0.0.0.0 --port 4000





