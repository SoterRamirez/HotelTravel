module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
