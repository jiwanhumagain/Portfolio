import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        'slant': 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
      },
      fontFamily: {
        enfonix: ['Enfonix', 'sans-serif'], // Custom font with fallback
      },
     
    },
  },
  plugins: [],
} satisfies Config;
