import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
import { Outfit } from "next/font/google";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#757575",
        darkslategray: "#333",
        "sun-950": "#481c00",
        "sun-900": "#7c390b",
        "sun-800": "#984608",
        "sun-700": "#bb5b02",
        "sun-600": "#ff8a00",
        "sun-500": "#ffac00",
        "sun-400": "#ffce1b",
        "sun-300": "#ffe046",
        "sun-200": "#ffef85",
        "sun-100": "#fff7c5",
        "sun-50": "#fffdea",
      },
      spacing: {},
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'abeezee': ['ABeeZee', 'sans-serif'],
      },         
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  plugins: [nextui(
    {
      layout: {
        radius: {
          medium: "0.4rem"
        }
      },
      themes: {
       light: {
         colors: {
          primary: {
            DEFAULT: "#FFAC00"
          },
          secondary: {
            DEFAULT: "#FFFDEA"
          }
         }
       }
      }
    }
  )],
};
export default config;
