import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f4',
          100: '#d9ede2',
          200: '#b5dbc7',
          300: '#85c2a5',
          400: '#56a480',
          500: '#3a8968',
          600: '#2b6e53',
          700: '#245944',
          800: '#1f4737',
          900: '#1b3b2f',
          950: '#0d211a',
        },
        warmth: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d8b5',
          300: '#e9bc85',
          400: '#df9a54',
          500: '#d88133',
          600: '#c96a28',
          700: '#a75223',
          800: '#864223',
          900: '#6d371f',
          950: '#3a1b0f',
        },
        calm: {
          50: '#f0f4f8',
          100: '#d9e2ef',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        safety: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fececa',
          300: '#fcaca5',
          400: '#f87c71',
          500: '#ef5544',
          600: '#dc3626',
          700: '#b92b1c',
          800: '#99271b',
          900: '#7f261d',
          950: '#450f0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
