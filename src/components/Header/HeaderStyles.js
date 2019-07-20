import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  width: 30rem;
  left: 0;
  top: 0;
  color: grey;
  border-right: 1px solid lightgrey;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
