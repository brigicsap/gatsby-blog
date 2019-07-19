import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from '../Nav/Nav'
import { StyledHeader, Inner, Title } from './HeaderStyles'

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
