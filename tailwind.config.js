/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.65rem', // For the extra small font size used in BlogCard
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'), // If using older Tailwind - in v3.3+ it's built-in
  ],
}