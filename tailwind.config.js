/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DC143C',
        'secondary': '#F21E0A',
        'accent': '#D009E8',
        'Black': '#241D1F',
        'black-75': 'rgba(36.47, 29.48, 30.88, 0.75)',
        'black-50': 'rgba(36.47, 29.48, 30.88, 0.50)',
        'black-25': 'rgba(36.47, 29.48, 30.88, 0.25)',
        'black-10': 'rgba(36.47, 29.48, 30.88, 0.10)',
        'black-5': 'rgba(36.47, 29.48, 30.88, 0.05)',
      },
    },
    fontSize: {
      'heading-1': ['3.052rem', {
        lineHeight: '6rem',
        fontWeight: '800',
      }],
      'heading-2': ['2.441rem', {
        lineHeight: '4.5rem',
        fontWeight: '700',
      }],
      'heading-3': ['1.953rem', {
        lineHeight: '3rem',
        fontWeight: '300',
      }],
      'heading-4': ['1.563rem', {
        lineHeight: '2rem',
        fontWeight: '600',
      }],
      'heading-5': ['1.25rem', {
        lineHeight: '1.5rem',
        fontWeight: '500',
      }],
      'heading-6': ['1rem', {
        lineHeight: '1rem',
        fontWeight: '500',
      }],
      'paragraph': ['1rem', {
        lineHeight: '2rem',
        fontWeight: '300',
      }]
    },
    fontFamily: {
      'poppins': 'Poppins',
      'lexend': 'Lexend',
    },
  },
  plugins: [],
}