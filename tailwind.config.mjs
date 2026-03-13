/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // OPX Brand Colors
        brand: {
          bg: '#0a0a0a',
          surface: '#111111',
          card: '#1a1a1a',
          border: '#2a2a2a',
          accent: '#00e5ff',      // Electric cyan
          'accent-muted': '#00b4cc',
          gold: '#f0b429',
          text: '#e8e8e8',
          muted: '#888888',
          white: '#ffffff',
        },
        // Category colors
        category: {
          workouts: '#ff4d4d',
          peptides: '#7c3aed',
          skincare: '#ec4899',
          nutrition: '#22c55e',
          biohacking: '#00e5ff',
          mindset: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#e8e8e8',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#00e5ff',
          },
        },
      },
    },
  },
  plugins: [],
};
