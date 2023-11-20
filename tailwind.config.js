/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#1d2021',
        bgLight: '#fbf1c7',
        textDark: '#fbf1c7',
        textLight: '#1d2021',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

