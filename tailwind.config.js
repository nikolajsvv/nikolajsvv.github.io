/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dot-pattern": "url('./assets/dot-seamless-pattern.png')",
      },
      fontFamily: {
        signature: ["Neucha"],
      },
      textColor: {
        camel: "#f5e4bc",
        darkCamel: "#292823",
      },
      backgroundColor: {
        darkCamel: "#292823",
        camel: "#f5e4bc",
      },
    },
  },
  plugins: [],
};
