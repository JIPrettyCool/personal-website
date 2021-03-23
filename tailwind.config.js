const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        
        gri: "#424242",
        koyugri: "#1c1c1c",
        dcblue: "#7289da",
        dcdarkblue: "#6c82cf",
        dcgray: "#2f3136",
        dcdarkgray: "#202225",
        spogreen: "#1eb955",
        spodarkgreen: "#1bb14f",
        purp: "#977fd6",
        blu: "#315491",
      },
    },
  },
  variants: {},
  plugins: [],
}
