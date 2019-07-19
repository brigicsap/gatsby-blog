const colors = {
  primary: '#690f34', // Color for buttons or links
  bg: '#FFFFFF', // Background color
  lightgrey: '#D9D9D9',
  defaultgrey: '#A6A6A6',
  midgrey: '#565659',
  darkgrey: '#252526',
  white: '#FFFFFF',
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
  baseFontSize: '10px',
}

export default theme
