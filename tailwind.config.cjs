/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],

  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
    'bg-blue-200',
    'border-3',
    'border-solid',
    'border-black',
    'px-5',
    'py-3',
    'text-lg',
    'font-medium',
  ],

  corePlugins: {
    preflight: false,
  }
};

module.exports = config;
