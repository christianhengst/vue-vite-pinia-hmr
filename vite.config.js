import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {

  return {

    // inject some global scss files
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },

    // add plugins
    plugins: [

      vue(),

    ],
  };
});
