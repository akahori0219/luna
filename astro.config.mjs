// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    define: {
      // Vitestの実行時チェックを無効化
      'import.meta.vitest': 'undefined'
    }
  }
});