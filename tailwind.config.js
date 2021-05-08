// tailwind.config.js

const { formatNumber }  = require('./src/util/Functions')

const colors = require('tailwindcss/colors')

const generateLayoutVars = ({ init, end, increase, decimals, addLabel = true, prefix = null, suffix, isNegative = false }) => {
  const items = {}
  while(init < end) {
    init = formatNumber((init += increase), decimals)
    items[`${isNegative ? '-' : ''}${init}${addLabel ? prefix ? prefix : suffix : ''}`] = `${isNegative ? '-' : ''}${init}${suffix}`
  }

  return items
}
const height = {
  'auto': 'auto',
  'full': '100%',
  'screen': '100vh',
  ...generateLayoutVars({ init: 0, end: 100, increase: 5, decimals: 0, prefix: '/100', suffix: '%' }),
  ...generateLayoutVars({ init: 0, end: 0.9, increase: 0.1, decimals: 1, suffix: 'vh' }),
  ...generateLayoutVars({ init: 0, end: 19, increase: 1, decimals: 0, suffix: 'vh' }),
  ...generateLayoutVars({ init: 0, end: 100, increase: 5, decimals: 0, suffix: 'vh' }),
}

const screens = {
  'xs': '404px',
  'sm': '576px',
  'md': '768px',
  'lg': '992px',
  'xl': '1200px',
  '2xl': '1400px',
}

const width = {
  'auto': 'auto',
  'full': '100%',
  'screen': '100vw',
  ...screens,
  ...generateLayoutVars({ init: 0, end: 100, increase: 5, decimals: 0, prefix: '/100', suffix: '%' }),
  ...generateLayoutVars({ init: 0, end: 0.9, increase: 0.1, decimals: 1, suffix: 'vw' }),
  ...generateLayoutVars({ init: 0, end: 9, increase: 1, decimals: 0, suffix: 'vw' }),
  ...generateLayoutVars({ init: 0, end: 100, increase: 5, decimals: 0, suffix: 'vw' }),
  ...generateLayoutVars({ init: 0, end: 10, increase: 1, decimals: 0, suffix: 'vh' }),
  ...generateLayoutVars({ init: 0, end: 100, increase: 5, decimals: 0, suffix: 'vh' }),
}

const marginAndPaggin = {
  'auto': 'auto',
  ...generateLayoutVars({ init: 0, end: 0.9, increase: 0.1, decimals: 1, suffix: 'vh', addLabel: false }),
  ...generateLayoutVars({ init: 0, end: 9, increase: 1, decimals: 0, suffix: 'vh', addLabel: false }),
  ...generateLayoutVars({ init: 0, end: 100, increase: 5, decimals: 0, suffix: 'vh', addLabel: false }),
  ...generateLayoutVars({ init: 0, end: 0.9, increase: 0.1, decimals: 1, suffix: 'vh', addLabel: false, isNegative: true }),
  ...generateLayoutVars({ init: 0, end: 9, increase: 1, decimals: 0, suffix: 'vh', addLabel: false, isNegative: true }),
}

module.exports = {
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
    },

    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'aldrich': ['Aldrich', 'sans-serif'],
    },

    fontSize: {
      'xxs': '.8vw',     // 12px
      'xs': '.9vw',     // 12px
      'sm': '1vw',    // 14px
      'base': '1.2vw',     // 16px
      'lg': '1.4vw',   // 18px
      'xl': '1.6vw',    // 20px
      '2xl': '2vw',    // 24px
      '3xl': '2.3vw',  // 30px
      '4xl': '2.8vw',  // 30px
      '5xl': '3.4vw',  // 30px
    },

    fontWeight: {
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semi-bold': 600,
      'bold': 700,
    },

    boxShadow: {
      xs: '2px 2px 6px 0px rgba(47, 49, 82, 0.05)',
      sm: '2px 2px 6px 0px rgba(47, 49, 82, 0.15)',
      top: '-4px -4px 8px 0px rgba(47, 49, 82, 0.15)',
      default: '3px 3px 10px 0px rgba(47, 49, 82, 0.15)',
      md: '4px 4px 40px 0px rgba(47, 49, 82, 0.25)',
      lg: '4px 4px 60px 0px rgba(47, 49, 82, 0.35)'
    },

    width: width,

    height: height,

    minHeight: height,

    maxHeight: height,

    maxWidth: width,

    minWidth: width,

    padding: marginAndPaggin,

    margin: marginAndPaggin,

    screens,

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

    borderRadius: {
      default: '8px',
      'none': '0 !important',
      'sm': '4px',
      'md': '12px',
      'lg': '20px',
      'full': '9999px',
    },

    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    
    extend: {
      transitionDuration: {
        0: '0ms', 
        100: '100ms', 
        200: '200ms', 
        300: '300ms', 
        400: '400ms', 
        500: '500ms', 
      }
    }
  },
  variants: {
    height: ['responsive'],
    padding: ['responsive', 'even'],
    maxWidth: ['responsive'],
    minWidth: ['responsive'],
    textAlign: ['responsive'],
    margin: ['responsive', 'even', 'odd', 'last'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus', 'even', 'last'],
    border: ['responsive', 'hover', 'focus', 'even', 'last'],
    borderStyle: ['responsive', 'hover', 'focus', 'even', 'last'],
    backgroundColor: ['responsive', 'hover', 'active', 'focus', 'group-hover', 'even'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  purge: false,
}
