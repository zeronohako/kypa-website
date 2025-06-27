// tailwind.config.js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#89ccbb',
          dark: '#76b9aa',
        },
      },
    },
  },
  plugins: [],
};
