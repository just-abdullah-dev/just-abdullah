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
        primary: "#fe4031",
        secondary: "#a33327",
        tertiary: "#689775",
        quaternary: "#917164",
        quinary: "#ad8174",
        light: "#d9d9d9",
        muted: "#abafb3",
        shaft: "#333",
        dark: "#0e1b20",
      },
    },
  },
  plugins: [],
};
