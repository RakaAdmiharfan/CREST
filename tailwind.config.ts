import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '0.25rem',
        'md': '15px',
        'lg': '20px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'darkblue': '#2E3362',
        'pressedblue': '#1D2149',
        'teal': '#98A8D0',
        'pressedteal': '#AEBEE8',
        'lblue': '#6C88CD',
        'pressedlblue': '#7F9EEB',
        'red': '#EB5B5B',
        'pressedred' : '#CA5050',
        'textblue': '#1E2351',
        'backcolor':'#EFF2FA'
      },
      boxShadow: {
        'md': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}



export default config
