/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        hvid: "fffbe2",
        pinkpink: "f9c9bb",
        salmon: "fab9a5",
        redred: "b94723",
        deepblue: "05377c",
      },

      fontFamily: {
        afacad: ["Afacad"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
