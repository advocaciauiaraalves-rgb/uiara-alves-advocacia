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
          DEFAULT: '#C9A84C',
          light: '#E8C84A',
        },
        dark: '#1A1A1A',
        'off-white': '#F9F7F4',
        'text-muted': '#4A4A4A',
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
