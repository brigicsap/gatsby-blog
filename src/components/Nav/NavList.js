import React from 'react'

import { StyledNav } from './NavStyles'

const NavList = ({children}) => {
  return (
    <StyledNav>
      <ul>
        {children}
      </ul>
    </StyledNav>
  )
}

export default NavList
