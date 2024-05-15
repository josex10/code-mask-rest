import type { Config } from "tailwindcss";

import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      "light": {
        extend: "light",
        colors: {
          background: '#FBFBFE',
          foreground: '#000000',
          primary: {
            DEFAULT:'#3700B3',
            foreground: '#FFFFFF'
          },
          secondary: {
            DEFAULT: '#005457',
            foreground: '#FFFFFF'
          },
          success: {
            DEFAULT: '#27AE60',
            foreground: '#FFFFFF'
          },
          warning: {
            DEFAULT: '#E2B93B',
            foreground: '#FFFFFF'
          },
          danger: {
            DEFAULT: '#DF1B1B',
            foreground: '#FFFFFF'
          },
          content1: {
            DEFAULT: '#EEEEEE',
            foreground: '#000000'            
          }
        }
      },
      "dark": {
        extend: "dark",
        colors: {
          background: '#121212',
          foreground: '#E3E3E3', 
          primary: {
            DEFAULT:'#BB86FC',
            foreground: '#FFFFFF'
          },
          secondary: {
            DEFAULT: '#03DAC5',
            foreground: '#000000'
          },
          success: {
            DEFAULT: '#27AE60',
            foreground: '#FFFFFF'
          },
          warning: {
            DEFAULT: '#E2B93B',
            foreground: '#FFFFFF'
          },
          danger: {
            DEFAULT: '#EB5757',
            foreground: '#FFFFFF'
          },
          content1: {
            DEFAULT: '#1E1D23',
            foreground: '#E3E3E3'            
          }
        }
      },
    }
  })],
};
export default config;
