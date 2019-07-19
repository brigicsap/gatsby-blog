import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import Nav from './Nav'

const StyledHeader = styled.header`
  display: flex;
  color: grey;
  justify-content: space-between;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
const Title = styled.h1`
  padding: 1rem;
  a {
    text-decoration: none;
    font-size: 2rem;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Inner>
      <Title>
        <Link to="/">
          {siteTitle}
        </Link>
      </Title>
      </Inner>
      <Nav>nav</Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
