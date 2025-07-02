// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind()],
  vite: {
    define: {
      // Vitestの実行時チェックを無効化
      'import.meta.vitest': 'undefined'
    }
  }
});