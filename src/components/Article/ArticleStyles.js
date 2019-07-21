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
    background: linear-gradient(to bottom, #D9D9D9 0%, #D9D9D9 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 2px 2px;
    transition: background-size ${props => props.theme.transitions.normal};

    @media (min-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 2.4rem;
    }

    &:hover,
    &:focus {
      background-size: 4px 50px;
    }
  }
`

export { StyledArticleList, StyledArticleItem }
