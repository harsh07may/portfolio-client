/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "port-blue": "#091931",
        neon: "#70f4da",
      },
    },
  },
  plugins: [],
};
