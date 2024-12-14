module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui'],

      },
      colors: {

        'text': {
          50: '#efeff5',
          100: '#e0e0eb',
          200: '#c0c0d8',
          300: '#a1a1c4',
          400: '#8282b0',
          500: '#62629d',
          600: '#4f4f7d',
          700: '#3b3b5e',
          800: '#27273f',
          900: '#14141f',
          950: '#0a0a10',
        },
        background: {
          DEFAULT: '#0a0a0f',
          1: '#0d0d15',
          2: '#0f0f18',
          3: '#13131d',
          4: '#161621',
          5: '#1a1a26',
          6: '#20202d',
          7: '#252535',
        },
        'primary': {
          50: '#e8e8fd',
          100: '#d0d1fb',
          200: '#a1a3f7',
          300: '#7274f3',
          400: '#4346ef',
          450: '#30339e',
          500: '#1418eb',
          600: '#1013bc',
          700: '#0c0e8d',
          800: '#080a5e',
          900: '#04052f',
          950: '#020217',
        },
        'secondary': {
          50: '#ededf7',
          100: '#dbdcf0',
          200: '#b7b8e1',
          300: '#9395d2',
          400: '#6f72c3',
          500: '#4b4fb4',
          600: '#3c3f90',
          700: '#2d2f6c',
          800: '#1e1f48',
          900: '#0f1024',
          950: '#080812',
        },
        'accent': {
          50: '#f8ecf5',
          100: '#f1daeb',
          200: '#e4b4d8',
          300: '#d68fc4',
          400: '#c969b1',
          500: '#bb449d',
          600: '#96367e',
          700: '#70295e',
          800: '#4b1b3f',
          900: '#250e1f',
          950: '#130710',
        },

      },
      /*
        backgroundImage: theme => ({
        'radial-gradient': `radial-gradient(ellipse at 50% 50%, ${theme('colors.primary.400')} 10%, transparent 60%),
    radial-gradient(circle at 25% 75%, ${theme('colors.secondary.300')} 10%, transparent 60%),
    radial-gradient(circle at 75% 25%, ${theme('colors.accent.400')} 10%, transparent 60%),
    linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 100%)`
      }),

       */
      /*
          backgroundImage: {
        'custom-gradient': `
    radial-gradient(ellipse 60% 650px at 50% 0, rgba(105, 120, 225, 0.15) 0%, rgba(105, 120, 225, 0) 80%),
    radial-gradient(circle at 27% 300px, rgba(125, 0, 225, 0.12) 0%, rgba(125, 0, 225, 0) 14%),
    radial-gradient(circle at 62% 400px, rgba(205, 110, 225, 0.1) 0%, rgba(205, 110, 225, 0) 10%)
  `
      },

       */
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.2), rgba(255, 255, 255, 0))',
      },

    },
  },
  plugins: [],
}