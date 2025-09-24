/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // New sophisticated lokum-inspired palette
        'lokum': {
          // Primary background
          cream: '#FDF8F0',      // Creamy off-white from logo background
          
          // Accent colors from the lokum cubes
          coral: '#E68A7F',      // Muted terracotta from red cube
          sage: '#A0B38B',       // Earthy sage green from green cube  
          apricot: '#F5B972',    // Warm apricot from orange cube
          
          // Text colors
          charcoal: '#2C2C2C',   // Deep charcoal for primary text
          gray: '#777777',       // Medium gray for secondary text
          
          // Legacy colors (keeping for backward compatibility)
          sugar: '#FDF8F0',      // Same as cream
          pink: '#E68A7F',       // Same as coral
          rose: '#E68A7F',       // Same as coral
          pistachio: '#A0B38B',  // Same as sage
          caramel: '#F5B972',    // Same as apricot
          lavender: '#E68A7F',   // Updated to coral
        },
        'delight': {
          50: '#fdf9f4',
          100: '#fbf0e6',
          200: '#f7dcc7',
          300: '#f0c09e',
          400: '#e89d73',
          500: '#E68A7F',
          600: '#d4705a',
          700: '#b85a42',
          800: '#964a38',
          900: '#7a3e32',
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
        'lokum': '0 4px 14px 0 rgba(230, 138, 127, 0.25)',
        'lokum-lg': '0 10px 25px 0 rgba(230, 138, 127, 0.35)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
