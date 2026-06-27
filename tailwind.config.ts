import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        card: "#151515",
        primary: "#7C3AED",
        secondary: "#8B5CF6",
        accent: "#00E5FF"
      }
    }
  },
  plugins: []
};

export default config;
