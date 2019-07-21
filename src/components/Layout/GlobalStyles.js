import { createGlobalStyle } from 'styled-components'

// @font-face {
//   font-family: 'Silka';
//   src: url("../static/fonts/silka-regular.eot") format("eot"),
//        url("../static/fonts/silka-regular.woff2") format("woff2");
//   font-weight: normal;
//   font-style: normal;
// }
// @font-face {
//   font-family: 'Silka-Italic';
//   src: url("../static/fonts/silka-regularitalic.eot") format("eot"),
//        url("../static/fonts/silka-regularitalic.woff2") format("woff2");
//   font-weight: normal;
//   font-style: normal;
// }
const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    background: white;
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: ${props => props.theme.baseFontSize};
      h1 {
        font-size: 2.4rem;
      }
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.7rem;
      }
      h4 {
        font-size: 1.4rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    color: ${props => props.theme.colors.darkgrey};
    font-size: 1.6rem;
  }
  a {
    color: black;
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.darkgrey};
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.defaultgrey};
    height: 100%;
    width: 5px;
    margin-left: -2rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.darkgrey};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
`

export default GlobalStyle
