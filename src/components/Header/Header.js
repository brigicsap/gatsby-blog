import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

import NavList from '../Nav/NavList'
import NavItem from '../Nav/NavItem'
import { StyledHeader, Inner, Title } from './HeaderStyles'

const Header = ({ siteTitle, categories }) => (
  <StyledHeader>
    <Inner>
      <Link to="/">
        <Title>{siteTitle}</Title>
      </Link>
      <NavList>
        <NavItem
          label={`All`}
          to={`/`}
        />
        {categories && categories.map(item => (
          <NavItem
            key={item}
            label={item}
            to={`/categories/${item}`}
          />
        ))}
      </NavList>
    </Inner>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  categories: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
