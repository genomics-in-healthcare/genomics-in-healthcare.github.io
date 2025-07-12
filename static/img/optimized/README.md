# 图片优化指南

根据PageSpeed Insights的报告，以下图片需要进行优化:

## 需要优化的图片

1. `/static/img/logo/STEMJC_genomics_in_healthcare.png`
   - 当前尺寸: 5920x2368 (1,713.4 KiB)
   - 显示尺寸: 88x35
   - 推荐操作: 调整尺寸并压缩，目标尺寸176x70 (2倍像素密度)

2. `/static/img/logo/PolyU-Logos.png`
   - 当前尺寸: 4368x1092 (92.8 KiB)
   - 显示尺寸: 115x29
   - 推荐操作: 调整尺寸并压缩，目标尺寸230x58 (2倍像素密度)

## 优化步骤

1. 使用图像编辑软件(如GIMP, Photoshop或在线工具如squoosh.app)调整图片尺寸
2. 保存为WebP格式以提供更好的压缩
3. 为不支持WebP的旧浏览器提供PNG备用方案
4. 在HTML中使用`<picture>`元素来提供不同格式和分辨率的图片

## 示例HTML代码

```html
<picture>
  <source srcset="/static/img/optimized/STEMJC_genomics_in_healthcare.webp" type="image/webp">
  <source srcset="/static/img/optimized/STEMJC_genomics_in_healthcare.png" type="image/png">
  <img class="navb-icon mx-2" src="/static/img/optimized/STEMJC_genomics_in_healthcare.png" 
       alt="JC STEM Lab of Genomics in Healthcare" 
       width="88" height="35" style="height: 2.2em; width: 88px;">
</picture>

<picture>
  <source srcset="/static/img/optimized/PolyU-Logos.webp" type="image/webp">
  <source srcset="/static/img/optimized/PolyU-Logos.png" type="image/png">
  <img class="inline-block navb-icon ml-2" src="/static/img/optimized/PolyU-Logos.png" 
       alt="Hong Kong Polytechnic University (PolyU) logo" 
       width="115" height="29" style="height: 1.8em; width: 115px;">
</picture>
```

## 命令行优化示例

使用ImageMagick调整图片尺寸:

```bash
# 安装ImageMagick (如果尚未安装)
# Ubuntu/Debian
# sudo apt-get install imagemagick

# 调整尺寸并输出为PNG
convert /static/img/logo/STEMJC_genomics_in_healthcare.png -resize 176x70 /static/img/optimized/STEMJC_genomics_in_healthcare.png
convert /static/img/logo/PolyU-Logos.png -resize 230x58 /static/img/optimized/PolyU-Logos.png

# 转换为WebP格式(如果已安装WebP工具)
cwebp -q 80 /static/img/optimized/STEMJC_genomics_in_healthcare.png -o /static/img/optimized/STEMJC_genomics_in_healthcare.webp
cwebp -q 80 /static/img/optimized/PolyU-Logos.png -o /static/img/optimized/PolyU-Logos.webp
```

优化后，请替换HTML中的图片引用，使用`<picture>`元素或直接更新路径。 