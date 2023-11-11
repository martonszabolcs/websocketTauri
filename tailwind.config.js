/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#262626",
        grey: "#404247",
        lightGrey: "#757575",
        blueLight: "#456278",
        blue: "#3478ca",
        blueOpacity: "rgba(52, 120, 202, 0.4)",
        blueRGBA: "rgba(64, 66, 71, 0.1)",
        greenRGBA: "rgba(74, 222, 128, 0.1)",
        purple: "#8083FF",
        light: "#cccccc",
        black: "#000000ff",
        white: "#ffffffff",
        green: "#4ade80",
        red: "#FF454C",
        redRGBA: "rgba(255, 69, 76, 0.1)",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "cursive"],
        suez: ['"Suez One"', "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
