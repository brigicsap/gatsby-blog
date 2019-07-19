import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  background: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  padding: 2rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    opacity: 0;
    height: 0;
    font-size: 0;
    width: 0;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <Link
        to="/"
        className="menu"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M9 12h40v2H9zM9 28h40v2H9zM9 44h40v2H9z"/><path d="M0 0v58h58V0H0zm56 56H2V2h54v54z"/></svg>
        <span>Menu</span>
      </Link>
    </StyledNav>
  );
};

export default Nav;
