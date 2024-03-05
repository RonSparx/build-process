import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import { resolve } from "node:path";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@fonts": resolve("frontend/fonts"),
      "@images": resolve("frontend/images"),
      "@scripts": resolve("frontend/scripts"),
      "@styles": resolve("frontend/styles"),
      "@svg": resolve("frontend/svg"),
    },
  },
  plugins: [
    shopify({
      additionalEntrypoints: [
        "frontend/fonts/**/*",
        "frontend/images/**/*",
        "frontend/scripts/**/*",
        "frontend/styles/**/*",
        "frontend/svg/**/*",
      ],
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: /^lit/,
    },
  },
});
