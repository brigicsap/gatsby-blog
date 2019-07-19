import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import styled from 'styled-components'

const Article = ({ title, slug }) => {
  return (
    <div>
      <Link to={slug}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

Article.propTypes = {

};

export default Article;
