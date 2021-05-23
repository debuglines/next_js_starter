import { asStyles } from '../helpers/styleHelpers'

const darkModeStyles = asStyles({
  'html, body, #root': {
    backgroundColor: '#282828',
    color: '#e4e6eb',
  },

  a: {
    ':link': {
      color: '#e4e6eb',
    },
    ':hover': {
      color: '#fff',
    },
    ':visited': {
      color: '#b3b3b3',
    },
  },
})

const layoutStyles = asStyles({
  body: {
    margin: 0,
    padding: 0,
  },

  html: {
    boxSizing: 'border-box',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
})

const textStyles = asStyles({
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },

  'html, body, #root': {
    fontSize: '18px',
  },

  'h1,h2,h3': {
    fontWeight: 500,
  },
})

export default [layoutStyles, textStyles, darkModeStyles]
