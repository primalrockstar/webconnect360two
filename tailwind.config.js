/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#0066CC',
        'medical-teal': '#00A3A3',
        'medical-green': '#00AA55',
        'medical-gray': '#F5F7FA',
      },
    },
  },
  plugins: [],
}
