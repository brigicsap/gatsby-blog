import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const NavItem = ({label, to}) => {
  return (
    <li>
      <Link to={to}>
        {label}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
