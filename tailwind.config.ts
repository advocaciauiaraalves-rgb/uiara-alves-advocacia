import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C5A46D',
          light: '#D4B884',
        },
        dark: '#1C1C1C',
        'off-white': '#F9F7F4',
        'warm-white': '#F5F5F5',
        'text-muted': '#4A4A4A',
        'text-muted-dark': '#BFBFBF',
      },
      fontFamily: {
        playfair: ['var(--font-rufina)', 'Georgia', 'serif'],
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
