import styled from 'styled-components'

const StyledHeader = styled.header`
  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    border-right: 1px solid lightgrey;
    position: fixed;
    width: 30rem;
    left: 0;
    top: 0;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    height: 100vh;
  }
`

const Title = styled.h1`
  padding: 0 2rem;

  a {
    color: black;
    text-decoration: none;
    font-size: 2rem;
  }
`

export { StyledHeader, Inner, Title }
