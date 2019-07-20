import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from "../components/Layout/Layout"
import ArticleList from '../components/Article/ArticleList'
import ArticleItem from '../components/Article/ArticleItem'
import { CategoryTitle } from '../components/Layout/LayoutStyles'
import Seo from "../components/Seo"

const Category = ({data: { allMarkdownRemark }, pageContext }) => {
  const totalCount = allMarkdownRemark.totalCount
  const posts = allMarkdownRemark.nodes
  const category = pageContext.category

  return (
    <Layout>
      <Seo title={category} />
      <CategoryTitle>{category} ({totalCount})</CategoryTitle>
      <ArticleList>
        { posts && posts.map(post => (
          <ArticleItem
            key={post.id}
            title={post.frontmatter.title}
            slug={post.fields.slug}
          />
        ))}
      </ArticleList>
    </Layout>
  )
}

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export default Category

export const categoryQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {categories: {eq: $category }}}
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "DD MMMM")
          categories
        }
        id
        fields {
          slug
        }
      }
    }
  }
`
