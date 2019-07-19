import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  width: 30rem;
  left: 0;
  top: 0;
  display: flex;
  color: grey;
  justify-content: space-between;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: white;
`

const Title = styled.h1`
  padding: 0 1rem;
  a {
    color: black;
    text-decoration: none;
    font-size: 2rem;
  }
`

export { StyledHeader, Inner, Title }
