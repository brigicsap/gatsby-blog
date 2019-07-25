import styled from 'styled-components'

const StyledPostHeader = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    height: 35vh;
    flex-direction: column-reverse;
  }
`

const StyledPostContent = styled.article`
  padding: 0 2rem 3rem;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    padding: 3rem;
    max-width: 60rem;
  }

  h2, h3 {
    margin-top: 3rem;
  }

  p, li {
    line-height: 2.6rem;
    color: ${props => props.theme.colors.darkgrey};
  }

`

const StyledPostTitle = styled.h1`
  margin: 0;
  padding: 0 2rem;
  font-size: 4rem;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    padding: 6rem 3rem 0;
    font-size: 5rem;
  }
`

const CategoryList = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  padding-left: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding-left: 2rem;
  }

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
    font-family: ${props => props.theme.fontFamily.monospace};
    text-transform: uppercase;
  }
`

export {
  StyledPostHeader,
  StyledPostContent,
  StyledPostTitle,
  CategoryList
}
