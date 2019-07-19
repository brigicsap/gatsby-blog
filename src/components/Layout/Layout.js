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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
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
