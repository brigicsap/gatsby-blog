import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PostContent from "../components/Post/PostContent"
import SEO from "../components/Seo"

import { StyledPostTitle } from '../components/Post/PostContentStyles'
const Post = ({data}) => {
  console.log({data})
  const title = data.markdownRemark.frontmatter.title
  const post = data.markdownRemark
  // const { previous, next } = this.props.pageContext
  return (
    <Layout>
      <StyledPostTitle>{title}</StyledPostTitle>
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
        date(formatString: "DD MMMM YYYY")
      }
      id
      html
    }
  }
`
