/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          DEFAULT: "#F2F4F7",
          soft: "#FAFBFC",
          mist: "#E6E9EF",
        },
        ink: {
          DEFAULT: "#0C1222",
          soft: "#1A2236",
          muted: "#5B657A",
          faint: "#8B93A7",
        },
        signal: {
          DEFAULT: "#0F766E",
          soft: "#14B8A6",
          faint: "#CCFBF1",
        },
        primary: "#0C1222",
        secondary: "#5B657A",
        light: "#F2F4F7",
        muted: "#8B93A7",
        dark: "#0C1222",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(12, 18, 34, 0.18)",
        lift: "0 28px 60px -28px rgba(12, 18, 34, 0.28)",
      },
      maxWidth: {
        shell: "1200px",
        wide: "1400px",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
