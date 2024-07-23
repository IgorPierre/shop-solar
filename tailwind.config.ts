import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#F7873D',
        'orange': '#FBB16A',
        'light-orange': '#FEF0A9',
        'gray': '#404040',
        'white': '#F7F8FC',
      },
      backgroundImage: {
        'pattern': "url('/images/pattern.svg')",
      }
    },
  },
  plugins: [],
};
export default config;
