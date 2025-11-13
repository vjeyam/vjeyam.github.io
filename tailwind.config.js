/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        accent: { DEFAULT: '#60A5FA' },
      },
      boxShadow: {
        glow: '0 0 30px rgba(96,165,250,0.25)',
      },
    },
  },
  plugins: [],
}
