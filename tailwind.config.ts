import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        primary: "#CA571E",
        secondary: "#552a15",
        background: "#ededed",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "show-right": {
          "100%": {
            width: "0",
          },
        },
        "chess-piece-appear": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5) rotate(-180deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 1.5s ease forwards",
        "show-right": "show-right 1s ease forwards",
        "chess-piece-appear": "chess-piece-appear 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;