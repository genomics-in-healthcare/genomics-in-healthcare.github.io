import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 开发环境 base 为空，生产环境使用 GitHub Pages 路径
  base: process.env.NODE_ENV === 'production' ? '/genomics-in-healthcare.github.io/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  publicDir: 'static', // Use static directory as public directory
  server: {
    port: 5173, // Vite 默认端口
    open: true, // 自动打开浏览器
  },
})

