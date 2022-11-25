/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#6E300E',
          secondary: '#0A2036',
          accent: "#E4E0DB",
          neutral: "#0A2036",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
