/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#17152f',
          deep: '#121029',
          card: '#1f1c3e',
          elev: '#262348',
        },
        ink: {
          DEFAULT: '#fafafa',
          dim: 'rgba(255,255,255,0.7)',
          muted: 'rgba(255,255,255,0.55)',
        },
        accent: {
          DEFAULT: '#6f4cff',
          violet: '#8b5cf6',
          glow: '#a48bff',
          peach: '#fbd5cf',
        },
      },
      fontFamily: {
        sans: ['"Britti Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Britti Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      fontSize: {
        h1: ['4.5rem', { lineHeight: '4.8rem', letterSpacing: '0' }],
        h2: ['4rem', { lineHeight: '4.8rem', letterSpacing: '0' }],
        h3: ['3.5rem', { lineHeight: '4.2rem', letterSpacing: '0' }],
        h4: ['3rem', { lineHeight: '3.3rem', letterSpacing: '0' }],
        h5: ['2rem', { lineHeight: '2.4rem', letterSpacing: '0' }],
        h6: ['1.5rem', { lineHeight: '1.8rem', letterSpacing: '.03rem' }],
      },
      boxShadow: {
        glow: '0 0 80px 10px rgba(139, 92, 246, 0.35)',
        glowSoft: '0 0 40px 4px rgba(139, 92, 246, 0.25)',
        card: '0 30px 60px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(60% 50% at 50% 30%, rgba(111,76,255,0.35) 0%, rgba(23,21,47,0) 60%)',
        'purple-glow':
          'radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.45) 0%, rgba(23,21,47,0) 70%)',
      },
    },
  },
  plugins: [],
};
