/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Turkish Delight inspired color palette
        'lokum': {
          pink: '#FFB6C1',      // Light pink like rose lokum
          rose: '#FF69B4',      // Vibrant rose
          pistachio: '#93C5A5', // Pistachio green
          sugar: '#FFFEF7',     // Sugar white
          caramel: '#DEB887',   // Caramel brown
          lavender: '#E6E6FA',  // Lavender purple
        },
        'delight': {
          50: '#fff0f3',
          100: '#ffe1e7',
          200: '#ffc8d4',
          300: '#ff9fb0',
          400: '#ff6b8a',
          500: '#ff3864',
          600: '#ed1450',
          700: '#c80843',
          800: '#a70940',
          900: '#8f0a3c',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'lokum': '0 4px 14px 0 rgba(255, 182, 193, 0.39)',
        'lokum-lg': '0 10px 25px 0 rgba(255, 182, 193, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
