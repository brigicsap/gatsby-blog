import styled from 'styled-components'

const StyledPostHeader = styled.div`
  height: 35vh;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledPostContent = styled.article`
  padding: 3rem;
  max-width: 60rem;

  p {
    line-height: 2.6rem;
  }
`

const StyledPostTitle = styled.h1`
  padding: 6rem 3rem 0;
  margin: 0;
  font-size: 5rem;
`

const CategoryList = styled.ul`
  list-style: none;
  font-size: 1.4rem;

  li {
    display: inline-block;
    padding-right: 1rem;

    &:not(:first-child) {
      &::before {
        content: '|';
        color: ${props => props.theme.colors.defaultgrey};
        opacity: .75;
        padding-right: 1rem;
      }
    }
  }

  a {
    color: ${props => props.theme.colors.defaultgrey};
    font-family: 'PT Mono', monospace;
    text-transform: uppercase;
  }
`

export {
  StyledPostHeader,
  StyledPostContent,
  StyledPostTitle,
  CategoryList
}
