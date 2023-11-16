/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "greyd": "#8e8c8e",
        "greyl": "#cac9cf",
        "black": "#00001a",
        "gold": "#e9aa4c",
        "orange": "#dd615f"
        
      },
    },
  },
  plugins: [],
}

