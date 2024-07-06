import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#C0C0C0',
        black: '#00000',
        linkblue: '#2563EB',
      },
    },
  },

  plugins: [],
};
export default config;
