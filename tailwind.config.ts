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
        "pawn-move": {
          "0%": {
            transform: "translateX(0) scale(1)",
          },
          "50%": {
            transform: "translateX(var(--move-distance)) scale(1.1)",
          },
          "100%": {
            transform: "translateX(var(--move-distance)) scale(1)",
          }
        },
        "pawn-promote": {
          "0%": {
            transform: "scale(1) rotate(0deg)",
          },
          "50%": {
            transform: "scale(1.2) rotate(180deg)",
          },
          "100%": {
            transform: "scale(1) rotate(360deg)",
          }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 1.5s ease forwards",
        "show-right": "show-right 1s ease forwards",
        "pawn-move": "pawn-move 0.5s ease forwards",
        "pawn-promote": "pawn-promote 0.8s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;