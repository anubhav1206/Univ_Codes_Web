/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      ligth: {
        "primary": "#073349",
        //"primary-focus": "#fff",
        "primary-content": "#000",

        "secondary": "#2be1ff",
        //"secondary-focus": "#fff",
        "secondary-content": "#fff",

        "accent": "#2b85ff",
        //"accent-focus": "#fff",
        "accent-content": "#fff",

        "neutral": "#343a40",
        //"neutral-focus": "#221f1f",
        "neutral-content": "#EBEBEB",

        "base-100": "#FFFFFF",
        //"base-200": "#1d2125",
        //"base-300": "#111315",
        "base-content": "#000",

        "info": "#3ABFF8",
        "info-content": "#fff",

        "success": "#2ec662",
        "success-content": "#fff",

        "warning": "#f9cc2c",
        "warning-content": "#fff",

        "error": "#e93434",
        "error-content": "#fff",
      }
    }
    ],
  },
}

