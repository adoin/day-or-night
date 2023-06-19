import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig((): UserConfig => {
  return {
    base: './',
    server: {
      port: 3333,
      host: true,
    },
    esbuild: {
      pure: ['console.log', 'debugger'],
    },
    plugins: [
      vue(),
      // have to
      vueJsx({
        /*include: [/\.vue$/, /\.tsx?$/, /\.jsx?$/]*/
      }),
      vueSetupExtend({
        /* enableAutoExpose 允许自动抛出 */
      }),
      cssInjectedByJsPlugin(),
    ],
    build: {
      outDir: 'dist',
      lib: {
        entry: 'index.ts',
        name: 'day-night-switcher',
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  };
});
