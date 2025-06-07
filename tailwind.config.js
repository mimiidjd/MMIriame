/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Safelist dynamic classes for category badges and other pastel colors
    { pattern: /bg-gradient-to-r/ },
    { pattern: /from-(blue|indigo|purple|pink|emerald|teal|cyan|fuchsia|lime|orange|rose|amber|violet)-(200|500|600)/ },
    { pattern: /to-(blue|indigo|purple|pink|emerald|teal|cyan|fuchsia|lime|orange|rose|amber|violet)-(200|500|600)/ },
    { pattern: /text-(white|blue-800|purple-800|green-800|emerald-800|indigo-800)/ },
    { pattern: /shadow-sm/ },
    { pattern: /hover:shadow/ },
    // Add pastel background colors used in Hero and About
    { pattern: /bg-(blue|purple|emerald|cyan|pink|teal|rose|amber|indigo|violet)-(50|100|200|400)\/?(50)?/ },
  ],
} 