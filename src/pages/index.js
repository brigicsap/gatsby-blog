import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ArticleList from '../components/Article/ArticleList'
import ArticleItem from '../components/Article/ArticleItem'
import SEO from "../components/Seo"

const IndexPage = ({ data: { allMarkdownRemark }}) => {
  const posts = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <ArticleList>
        { posts && posts.map(({node}) => (
          <ArticleItem
            key={node.id}
            title={node.frontmatter.title}
            slug={node.fields.slug}
          />
        ))}
      </ArticleList>
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
