const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // colors: {
    //   black: colors.black,
    //   white: colors.white,
    //   slate: colors.slate,
    //   emerald: colors.emerald,
    //   violet: colors.violet,
    //   amber: colors.amber,
    //   fuchsia: colors.fuchsia,
    //   blue: {
    //     100: '#e1e3fa',
    //     200: '#c3c8f6',
    //     300: '#a5aef2',
    //     400: '#8693ef',
    //     500: '#6678ed',
    //     600: '#445ee2',
    //     700: '#364bb4',
    //     800: '#293988',
    //     900: '#1c275e',
    //     1000: '#111737',
    //   },
    // },
    extend: {
      colors: {
        black: '#000000',
        gray: {
          light: '#E0E0E0',
          medium: '#B0B0B0',
          dark: '#44475A',
        },
        pink: '#FF79C6',
        purple: '#BD93F9',
        charcoal: '#1E1E1E', // Dark Charcoal Gray
        'charcoal-light': '#3C3C3C', // Charcoal Gray
      },
      spacing: {
        192: '48rem',
        210: '52.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
