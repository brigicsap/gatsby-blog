import styled from 'styled-components'

const StyledArticleList = styled.ul`
  margin: 0;
  margin-left: 4rem;
  padding: 2rem 0;
  list-style: none;
`

const StyledArticleItem = styled.li`
  padding: 1rem 3rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  transition: all ${props => props.theme.transitions.normal};

  a {
    color: black;
    font-size: 1.8rem;
    font-weight: 600;

    @media (min-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 2.4rem;
    }

    &:hover,
    &:focus {
      background-size: 100% 4px;
    }
  }
`

export { StyledArticleList, StyledArticleItem }
