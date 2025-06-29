/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#a259ff', // 紫
        dark: '#181f3a',    // ナビバー等のダークブルー
        card: '#18181c',    // カード背景
        accent: '#fff1fa',  // アクセント薄ピンク
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 