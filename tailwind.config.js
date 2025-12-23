/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {

      boxShadow: {
        // Defines the custom light grey shadow
        'subtle-grey': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
      },

    },
  },
  plugins: [],
};