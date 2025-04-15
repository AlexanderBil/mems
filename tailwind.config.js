import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'min': '1px', 'max': '659px'},
        'tablet': {'min': '640px', 'max': '767px'},
        'laptop': {'min': '768px', 'max': '1023px'},
        'desktop': {'min': '1024px', 'max': '1279px'},
        'wide': {'min': '1280px'},
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
