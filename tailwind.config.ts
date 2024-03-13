import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // theme: "#2c5fdc",
        theme: "#f3b71a",
        themeSecond: "#447e94",
        textThemeColor: "#054cff",
        footerBg: "#fdfaf2",
        themeLight: "#cad9ff",
        inputBack: "#ebebeb",

        whiteFade:"#F7F4F1",
        whiteLight: "#E6E6E5",
        // blurBg:'#9A824A'
        // blurBg:'#969695'
        // blurBg:'#BE9F85'
        blurBg:'#BE9F85'
      },
    },
  },
  plugins: [],
};
export default config;
