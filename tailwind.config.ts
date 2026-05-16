import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        oat: {
          DEFAULT: "#F7F2EA",
          50: "#FCF8F1",
          100: "#F7F2EA",
          200: "#EBE3D2",
          300: "#D8CBB0",
        },
        cocoa: {
          DEFAULT: "#3A2A1F",
          900: "#241710",
          800: "#3A2A1F",
          700: "#4D3A2D",
          500: "#7A6552",
          300: "#A89684",
        },
        sage: {
          DEFAULT: "#7BA68A",
          800: "#577863",
          700: "#67916F",
          500: "#7BA68A",
          300: "#A4C2AE",
        },
        sky: {
          DEFAULT: "#6B8499",
          700: "#4F6678",
          500: "#6B8499",
        },
      },
      fontFamily: {
        display: ['"Outfit"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
