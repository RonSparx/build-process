import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import { resolve } from "node:path";

export default defineConfig({
  assetsInclude: ["**/*.liquid"],
  server: {
    host: true,
    port: 3000,
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@fonts": resolve("frontend/fonts"),
      "@modules": resolve("frontend/modules"),
      "@gif": resolve("frontend/gif"),
      "@images": resolve("frontend/images"),
      "@js": resolve("frontend/js"),
      "@svg": resolve("frontend/svg"),
    },
  },
  plugins: [
    shopify({
      additionalEntrypoints: [
        "frontend/css/**/*",
        "frontend/fonts/**/*",
        "frontend/gif/**/*",
        "frontend/images/**/*",
        "frontend/js/**/*",
        "frontend/svg/**/*",
      ],
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: /^lit/,
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
