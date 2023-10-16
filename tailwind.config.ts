import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9e19ea",
          secondary: "#d66477",
          accent: "#6e79d3",
          neutral: "#242037",
          "base-100": "#e6e9f0",
          info: "#adc2eb",
          success: "#166f50",
          warning: "#fcbe59",
          error: "#f6290e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
