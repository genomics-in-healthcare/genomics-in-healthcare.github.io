#!/bin/bash
# Jekyll _site 目录清理脚本 (WSL/Linux)
# 使用方法: chmod +x clean-site.sh && ./clean-site.sh

SITE_DIR="_site"

echo "========================================"
echo "Jekyll _site 目录清理工具"
echo "========================================"
echo ""

if [ -d "$SITE_DIR" ]; then
    echo "正在删除 $SITE_DIR 目录..."
    if rm -rf "$SITE_DIR"; then
        echo "✓ $SITE_DIR 目录已成功删除"
        echo ""
        echo "现在可以运行: bundle exec jekyll serve"
    else
        echo "✗ 删除失败"
        echo ""
        echo "可能的原因:"
        echo "  1. 权限不足 - 尝试: sudo rm -rf $SITE_DIR"
        echo "  2. 文件被锁定"
        echo "  3. WSL 权限问题（如果在 /mnt/ 下）"
        echo ""
        echo "解决方案:"
        echo "  1. 在 Windows PowerShell 中删除: Remove-Item -Recurse -Force .\_site"
        echo "  2. 或者在 WSL 中使用: sudo chmod -R 755 $SITE_DIR && rm -rf $SITE_DIR"
        exit 1
    fi
else
    echo "✓ $SITE_DIR 目录不存在，无需清理"
fi

echo ""






