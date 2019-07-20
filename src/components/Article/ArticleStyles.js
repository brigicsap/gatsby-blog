import styled from 'styled-components'

const StyledArticleList = styled.ul`
  margin: 0;
  margin-left: 4rem;
  padding: 2rem 0;
  list-style: none;
`

const StyledArticleItem = styled.li`
  padding: 1rem 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  transition: all .2s ease;

  a {
    color: black;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0 3rem;
  }

  &:hover,
  &:focus {
    border-top: 1px solid ${props => props.theme.colors.lightgrey};
    border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
  }
`

export { StyledArticleList, StyledArticleItem }
