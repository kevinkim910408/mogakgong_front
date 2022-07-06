/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { min: "320px", max: "480px" },
      tablet: { min: "768px", max: "1024px" },
      desktop: { min: "1024px" },
    },

    colors: {
      red_deep: "#FF1C1C",
      red_light: "#F66262",

      green_deep: "#73A9AD",
      green_mid: "#90C8AC",
      green_light: "#C4DFAA",

      black: "#000",
      white: "#FFF",
      ivory: "#F5F0BB",
      gray: "#DDD",

      naver: "#2DB400",
      kakao: "#FEE500",
    },

    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,

      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        body: ["EF_hyunygothic"],
      },
    },
  },
  plugins: [],
};
