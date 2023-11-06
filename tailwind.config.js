/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        orange1:
          "url('orange1.png')",
        orange2:
          "url('orange2.png')",
        orange3:
          "url('orange3.png')",
        apple1:
          "url('apple1.png')",
        apple2:
          "url('apple2.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
