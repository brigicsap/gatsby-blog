import styled from 'styled-components'

const Content = styled.div`
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    margin-left: 30rem;
  }
`

const CategoryTitle = styled.h1`
  position: absolute;
  top: 3rem;
  left: 0;
  font-size: 2rem;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  white-space: nowrap;
  transform: rotate(180deg);
  opacity: .5;
`

export { Content, CategoryTitle }
