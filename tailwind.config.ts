import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4.375rem",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    opacity: {
      "0": "0",
      "20": "0.2",
      "40": "0.4",
      "60": "0.6",
      "80": "0.8",
      "100": "1",
    },
    // setup breakpoints
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#EEBEBE",
      secondary: "#CA9EE6",
      transparent: "transparent",
      muave: "#CA9EE6",
      flamingo: "#EEBEBE",
      rosewater: "#F2D5CF",
      pink: "#F4B8E4",
      red: "#E78284",
      maroon: "#EA999C",
      peach: "#EF9F76",
      blue: "#91D3E7",
      orange: "#EDB080",
      green: "#A3E09A",
      twilight: "#2C2D3D",
      "white-base": "#EFF1F5",
      "white-mantle": "#E6E9EF",
      "white-crust": "#DCE0E8",
      "surface-01": "#ACB0BE",
      "surface-02": "#BCC0CC",
      "surface-00": "#CCD0DA",
      "overlay-00": "#9CA0B0",
      "overlay-01": "#8C8FA1",
      "overlay-02": "#7C7F93",
      "twilight-01": "#4C4F69",
      "twilight-02": "#5C5F77",
      "twilight-03": "#6C6F85",
    },
    fontFamily: {
      sans: ["inter", "san-serif"],
      code: ["fira code", "nunito"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#EEBEBE",
              foreground: "#000000",
            },
            focus: "#EEBEBE",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#EEBEBE",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#F2D5CF",
              foreground: "#000000",
            },
            focus: "#EEBEBE",
          },
        },
      },
    }),
  ],
};
export default config;
