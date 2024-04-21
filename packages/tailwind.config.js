/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontFamily: {
    //   custom: ['Inter var', 'sans-serif'],
    // },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        custom: '0 0px 1px 0px #22c55e, 0 0px 2px 1px #22c55e',
      },
    },
  },
  prefix: 'ice-',
  plugins: [],
};
