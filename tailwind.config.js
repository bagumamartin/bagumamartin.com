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
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'black': 'var(--color-black)',
        'black-75': 'var(--color-black-75)',
        'black-50': 'var(--color-black-50)',
        'black-25': 'var(--color-black-25)',
        'black-10': 'var(--color-black-10)',
        'black-5': 'var(--color-black-5)',
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