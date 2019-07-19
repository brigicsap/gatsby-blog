import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Article from '../components/Article'
import SEO from "../components/Seo"

const IndexPage = ({ data: { allMarkdownRemark }}) => {
  const posts = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{
        fontSize: '8rem',
        fontWeight: '600'
      }}>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <ul>
        { posts && posts.map(({node}) => (
          <Article
            key={node.id}
            title={node.frontmatter.title}
            slug={node.fields.slug}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          id
        }
      }
    }
  }
`
