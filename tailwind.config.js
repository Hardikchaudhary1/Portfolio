/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808", // Deep black
        foreground: "#f3f4f6", // Silver text primary
        muted: "#9ca3af",      // Text secondary
        primary: {
          DEFAULT: "#9b1b30", // Deep wine/vine red
          dark: "#7a1526",
        },
        secondary: {
          DEFAULT: "#5c1424", // Dark burgundy
          dark: "#3d0d18",
        },
        card: "rgba(23, 23, 23, 0.7)",
        "card-border": "rgba(155, 27, 48, 0.12)",
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Poppins', 'sans-serif'],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
