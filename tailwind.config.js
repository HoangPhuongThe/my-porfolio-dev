/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
      },
      minHeight: {
        'banner-default': '390px',
        'banner-desktop': '664px',
      },
    },
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover'],
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
}
