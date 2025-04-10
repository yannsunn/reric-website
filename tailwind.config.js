/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a5f7a',
        secondary: '#2c88a0',
        accent: '#f5a623',
        textColor: '#333333',
        lightGray: '#f5f5f5',
        mediumGray: '#e0e0e0',
        darkGray: '#666666',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
} 