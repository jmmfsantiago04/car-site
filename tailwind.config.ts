import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': '#454545',
        'custom-orange': '#F86400',
        'custom-sblue' : '#4D768A',
      },
      fontSize: {
        's16': '16px',
        's20': '20px',
        's30': '30px',
        's36': '36px',
        's48': '48px',
        's50': '50px',
      },
    },
  },
  plugins: [],
};
export default config;
