/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors ---> Change these colors later
        light: {
          primary: '#E5E7EB',
          secondary: '#85D6BD',
          textHeader: '#255973',
          cardBorder: '#54ACAB',
          smallHeader: '#1E334D',
          textDescription: '#131126',
        },
        // Dark theme colors
        dark: {
          primary: '#131126',
          secondary: '#1E334D',
          textHeader: '#54ACAB',
          cardBorder: '#255973',
          smallHeader: '#85D6BD',
          textDescription: '#E5E7EB',
        },
      },
      fontFamily: {
        custom: ['Inconsolata', 'monospace']
      }
    },
  },
  darkMode: 'class',

}
