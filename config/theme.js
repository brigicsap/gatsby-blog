import { lighten } from 'polished'

const colors = {
  primary: '#FF625E', // Color for buttons or links
  primaryLight: lighten(0.05, '#FF625E'),
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.15)',
  },
  white: 'white',
}

const transitions = {
  normal: '0.2s',
}

const fontSize = {
  small: '0.8rem',
}

const fontFamily = {
  // @TODO - remove if not used
  // serif: `'ScopeOne-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Silka', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '1rem',
}

export default theme
