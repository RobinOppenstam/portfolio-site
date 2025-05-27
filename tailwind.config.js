/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 40px rgba(236, 72, 153, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}