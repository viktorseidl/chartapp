/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "grow-left": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "75%",
          },
        },
      },
      animation: {
        'growleft': 'grow-left 0.1s ease-in',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

