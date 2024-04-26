import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      scss: '/src/scss',
      js: '/src/js',
    },
  },
});
