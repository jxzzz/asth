import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// https://vitejs.dev/config/
console.log(__dirname);
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      name: 'lib',
      // the proper extensions will be added
      fileName: 'lib',
    },
    cssCodeSplit: true,
    // outDir: 'dist',
    // assetsDir: 'theme-chalk',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
        },
        assetFileNames: (chunkInfo) => {
          return `theme-chalk/${chunkInfo.name} `;
        },
      },
    },
  },
});
