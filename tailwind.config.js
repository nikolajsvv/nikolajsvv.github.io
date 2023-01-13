/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "short-bounce": {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.5, 0, 0.4, 0.4)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "short-bounce": "short-bounce 1s infinite",
      },
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
