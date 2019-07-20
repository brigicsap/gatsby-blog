/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import theme from '../../../config/theme'
import GlobalStyle from './GlobalStyles'
import { Content } from './LayoutStyles'

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const getUniqueCategories = (data) => {
  const cats = data.map(item => item.node.frontmatter.categories)
  const flattened = Array.prototype.concat.apply([], cats)
  const categorySet = [...new Set(flattened)]
  const uniqueCategories = Array.from(categorySet)
  return uniqueCategories
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                categories
              }
              id
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
            categories={getUniqueCategories(data.allMarkdownRemark.edges)}/>
            <Content>
              {children}
            </Content>
            <Footer/>
          <GlobalStyle/>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
