import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js', // Your library's entry file
      name: 'ZVuePagination',
      fileName: (format) => `z-vue-pagination.${format}.js`, // Output filenames
    },
    rollupOptions: {
      external: ['vue'], // Exclude Vue from the build
      output: {
        globals: {
          vue: 'Vue', // Global variable for Vue in UMD builds
        },
      },
    },
  },
});