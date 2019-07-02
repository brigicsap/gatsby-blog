import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, SectionTitle } from '../components'

const Content = styled.div`
  grid-column: 2;
  padding: 3rem 6rem;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 0;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 0;
  color: ${props => props.theme.colors.grey.dark};

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>Hi.</h1>
      </Hero>
      <Content>
        <SectionTitle>Latest stories</SectionTitle>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          categories
        }
        # excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
