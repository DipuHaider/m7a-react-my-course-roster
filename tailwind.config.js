/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "course-blue": "#2F80ED",
        "course-dark": "#1C1B1B",
        "course-light": "#1B1B1B99",
      },
    },
  },
  plugins: [require("daisyui")],
};
