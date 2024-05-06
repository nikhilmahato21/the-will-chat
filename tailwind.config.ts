import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'concert':["Concert One", 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/forms')({
    strategy:'class'
  })],
};
export default config;
