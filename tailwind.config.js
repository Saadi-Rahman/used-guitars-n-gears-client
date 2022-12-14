/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        guitartheme: {
          primary: '#6E300E',
          secondary: '#0A2036',
          accent: "#E4E0DB",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      },
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'niagara': ['Niagara Solid', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
