import styled from 'styled-components'

const StyledNav = styled.nav`
  background: white;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      border-top: 1px solid ${props => props.theme.colors.lightgrey};
      border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
      padding: 1rem 2rem;
    }
  }

  li {
    padding: .5rem 0;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      display: inline-block;
      font-size: 1.3rem;

      &:not(:last-child) {
        padding-right: 1rem;
      }
    }
  }

  a {
    text-transform: uppercase;
  }
`

export { StyledNav }
