import { defineConfig, Plugin } from "vite";
import shopify from "vite-plugin-shopify";
import { resolve } from "node:path";
import fs from "fs-extra";

interface Bundler extends Plugin {
  generateBundle?: {
    sequential: boolean;
    order: "pre" | "post";
    handler: () => Promise<void>;
  };
}
function bundleStaticAsset(): Bundler {
  return {
    name: "bundle-static-asset",
    generateBundle: {
      sequential: true,
      order: "post",
      async handler() {
        await fs.copy("resources", "assets");
      },
    },
  };
}

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@scripts": resolve("frontend/scripts"),
      "@styles": resolve("frontend/styles"),
    },
  },
  plugins: [
    shopify({
      additionalEntrypoints: ["frontend/scripts/**/*", "frontend/styles/**/*"],
    }),
    bundleStaticAsset(),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: /^lit/,
    },
  },
});
