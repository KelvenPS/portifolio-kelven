/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          integra: {
            accent: '#aa3bff',
            bg: '#f4f3ec',
            dark: '#16171d',
          }
        },
        fontFamily: {
          sans: ['system-ui', 'sans-serif'],
          mono: ['ui-monospace', 'monospace'],
        }
      },
    },
    plugins: [],
  }