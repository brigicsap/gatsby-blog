import React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'gatsby'

import { StyledPostHeader, StyledPostTitle, CategoryList } from './PostStyles'

const PostHeader = ({ title, categories }) => {
  return (
    <StyledPostHeader>
      <StyledPostTitle>{title}</StyledPostTitle>
      <CategoryList>
        { categories && categories.map(cat => (
          <li key={cat}>
            <Link to={`/categories/${cat}`}>{cat}</Link>
          </li>
          ))
        }
      </CategoryList>
    </StyledPostHeader>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array
};

export default PostHeader;
