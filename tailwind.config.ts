import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const utilitiesPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.font-normal': {
      fontWeight: '400',
      fontVariationSettings: '"wght" 400',
    },
    '.font-medium': {
      fontWeight: '500',
      fontVariationSettings: '"wght" 500',
    },
    '.font-semibold': {
      fontWeight: '600',
      fontVariationSettings: '"wght" 600',
    },
    '.font-bold': {
      fontWeight: '700',
      fontVariationSettings: '"wght" 700',
    },
    '.mi-auto': {
      marginInline: 'auto',
    },
    '.overflow-x-padded-scroll': {
      overflow: 'auto',
      width: '100vw',
      marginLeft: 'calc((100dvw - 100%) / -2)',
      paddingInline: 'calc((100dvw - 100%) / 2)',
    },
  });
});

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
      },
      screens: {
        xs: '425px',
        'sm-alt': '480px',
      },
    },
    fontFamily: {
      mono: [
        ['var(--font-space-grotesk)', 'monospace', ...defaultTheme.fontFamily.mono],
        {
          fontVariationSettings: "'wght' 400",
        },
      ],
    },
  },
  plugins: [utilitiesPlugin],
};

export default config;
