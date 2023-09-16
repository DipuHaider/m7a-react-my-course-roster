/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "course-bg": "#F3F3F3",
        "course-blue": "#2F80ED",
        "course-dark": "#1C1B1B",
        "course-light": "#1B1B1B99",
        "status-light": "#1B1B1BCC",
      },
    },
  },
  plugins: [require("daisyui")],
};
