import { defineConfig } from "vite";
import { resolve as resolved } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      api: resolved(__dirname, "website/api"),
      components: resolved(__dirname, "website/components"),
      config: resolved(__dirname, "website/config"),
      pages: resolved(__dirname, "website/pages"),
      utils: resolved(__dirname, "website/utils"),
    },
  },
  server: { open: true },
});
