const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{html,ejs}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "12px",
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      success: "#198754"
    },
    fontSize: {
      "exsm":["14px", "1.5"],
      "sm": ["14px", "1.5"],
      "base":["16px", "1.5"],
      "lg": ["18px", "1.5"],
      "xl": ['20px', "1.5"],
      "2xl": ["24px", "1.5"],
      "3xl": ["32px", "1.5"],
      "4xl": ["36px", "1.5"],
      "5xl": ["42px", "1.5"],
      "6xl": ["48px", "1.5"],
      "7xl": ["64px", "1.5"],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}
