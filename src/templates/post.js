import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PostContent from "../components/Post/PostContent"
import PostHeader from "../components/Post/PostHeader"
import Seo from "../components/Seo"

const Post = ({data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const post = data.markdownRemark
  const categories = data.markdownRemark.frontmatter.categories
  // const { previous, next } = this.props.pageContext
  return (
    <Layout>
      <Seo title={title} />
      <PostHeader
        title={title}
        categories={categories}
      />
      <PostContent content={post.html}/>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
  })
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
        date(formatString: "DD MMMM")
        categories
      }
      id
      html
    }
  }
`
