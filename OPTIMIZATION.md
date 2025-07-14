# 网站性能优化指南

根据PageSpeed Insights的报告，我们对网站进行了多项优化，以提高移动端和桌面端的性能。

## 已完成的优化

### 1. 图片优化

- 创建了优化目录 `/static/img/optimized/`，并提供了图片优化指南
- 修改了高分辨率图片的使用方式，使用`<picture>`元素支持WebP格式
- 为图片添加了明确的宽度和高度属性，防止布局偏移

### 2. CSS优化

- 创建了精简版的Bootstrap CSS (`purged-bootstrap.css`)，只包含网站实际使用的样式
- 使用`media="print" onload`延迟加载非关键CSS文件
- 添加了`preload`提前加载关键CSS资源

### 3. JavaScript优化

- 为非关键JavaScript添加了`defer`属性
- 使用Service Worker缓存和优化资源加载

### 4. 无障碍优化

- 修复了viewport设置，删除了`user-scalable=no`并设置`maximum-scale=5.0`
- 增强了文本对比度，使用更深的文字颜色
- 改进了导航栏的背景色以增强对比度

### 5. 缓存策略

- 实现了Service Worker来控制资源缓存
- 为不同类型的资源设置了不同的缓存策略：
  - 图片：缓存优先，1年过期 (静态Logo等)，其他30天过期
  - CSS/JS：网络优先，1年过期 (带版本号的不变资源)
  - HTML：网络优先，1小时过期
- 添加了缓存控制头，显著提高了重复访问的性能
- 实现了Netlify和标准HTTP缓存头支持

## 最新缓存优化 (2024)

我们通过以下方式进一步改进了网站的缓存策略:

1. **延长静态资源缓存寿命**
   - 将Logo、CSS和JavaScript文件的缓存寿命从10分钟延长到1年
   - 预计节省约1,740 KiB的重复下载流量
   - 为静态资源添加`immutable`标志，避免不必要的重新验证

2. **多层缓存机制**
   - Service Worker缓存：在客户端浏览器中实现长期缓存
   - HTTP缓存头：通过正确的`Cache-Control`头控制浏览器缓存行为
   - Netlify配置：使用`netlify.toml`和`_headers`文件设置缓存头

3. **资源分类缓存策略**
   - 关键Logo文件 (`STEMJC_genomics_in_healthcare.png`, `PolyU-Logos.png`): 1年缓存
   - JavaScript库 (jQuery, Bootstrap, Popper, Parallax): 1年缓存
   - CSS文件 (Bootstrap, Custom CSS): 1年缓存
   - 其他图片: 30天缓存
   - HTML页面: 1小时缓存

## 需要完成的工作

以下工作需要在实际服务器环境中完成:

1. **图片优化**
   - 按照`static/img/optimized/README.md`中的说明创建优化的图片版本
   - 使用工具(如ImageMagick)将图片调整到合适的尺寸
   - 生成WebP格式版本以获得更好的压缩效果

2. **配置服务器缓存头**
   - ✅ 已完成：为静态资源配置长期缓存头 (1年)
   - ✅ 已完成：确保HTML文件使用适当的缓存控制 (1小时)
   - 部署后监控缓存效果，确保缓存头正确应用

3. **检查字体加载**
   - 考虑预加载关键字体文件
   - 使用`font-display: swap`确保字体加载不会阻塞渲染

## 未来优化建议

1. **进一步减少JavaScript**
   - 评估是否真正需要jQuery和Bootstrap的JavaScript
   - 考虑使用更轻量级的替代方案或自定义解决方案

2. **延迟加载非首屏图片**
   - 对于首屏以下的图片，使用懒加载技术
   - 可以使用`loading="lazy"`或专门的JavaScript库

3. **进一步优化CSS交付**
   - 考虑内联关键CSS到HTML中
   - 将非关键CSS拆分为独立文件并延迟加载

4. **添加预连接和DNS预取**
   - 对关键第三方资源添加`preconnect`和`dns-prefetch`

5. **优化网络字体**
   - 考虑使用系统字体堆栈减少网络字体使用
   - 如果使用网络字体，确保使用WOFF2格式并考虑子集化

6. **版本化资源文件名**
   - 考虑为CSS和JS文件名添加哈希或版本号 (例如 `main.123abc.js`)
   - 这样可以支持永久缓存，并在更新时自动失效

## 如何验证优化效果

在完成优化后，请再次使用PageSpeed Insights测试网站性能:
https://pagespeed.web.dev/

您也可以使用以下工具进行更深入的性能分析:
- Chrome DevTools Lighthouse
- Chrome DevTools Network面板（查看缓存响应）
- WebPageTest.org
- GTmetrix 