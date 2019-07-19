import styled from 'styled-components'

const StyledNav = styled.nav`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  background: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  padding: 0 2rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    opacity: 0;
    height: 0;
    font-size: 0;
    width: 0;
  }
`

export { StyledNav }
