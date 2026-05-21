/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B2838',
          'navy-dark': '#111d29',
          'navy-light': '#243447',
          teal: '#3BA9A5',
          'teal-dark': '#2d8a87',
          'teal-light': '#4fc4c0',
          gray: '#5F6974',
          'gray-light': '#8a939e',
          'gray-pale': '#f4f6f8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      backgroundImage: {
        'hero': "linear-gradient(to right, rgba(17, 29, 41, 0.92) 55%, rgba(17, 29, 41, 0.4) 100%)",
      },
    },
  },
  plugins: [],
};
