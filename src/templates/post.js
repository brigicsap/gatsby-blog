import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Post = ({data}) => {
  console.log()
  const title = data.markdownRemark.frontmatter.title
  const post = data.markdownRemark
  // const { previous, next } = this.props.pageContext
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

Post.propTypes = {

}

export default Post

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      id
      html
      excerpt
    }
  }
`
