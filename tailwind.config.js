/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#d4d4d8",
        tertiary: "#22c55e",
        quaternary: "#f97316",
        quinary: "#ef4444",
        light: "#f5f5f5",
        muted: "#a3a3a3",
        shaft: "#262626",
        dark: "#030303",
      },
    },
    // fontSize: {
    //   xs: "10px",
    //   sm: "12px",
    //   base: "14px",
    //   lg: "16px",
    //   xl: "18px",
    //   "2xl": "20px",
    //   "3xl": "24px",
    //   "4xl": "28px",
    //   "5xl": "32px",
    //   "6xl": "36px",
    //   "7xl": "40px",
    //   "8xl": "44px",
    //   "9xl": "48px",
    // },
  },
  plugins: [],
};
