import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      padding: {
        "container-sm": "1rem",
        "container-md": "2rem",
        "container-lg": "3rem",
        "container-xl": "4rem",
      },
      maxWidth: {
        "container-sm": "480px",
        "container-md": "768px",
        "container-lg": "976px",
        "container-xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
