import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { StyledArticleItem } from './ArticleStyles'

const ArticleItem = ({ title, slug }) => {
  return (
    <StyledArticleItem>
      <Link to={slug}>
        <span>{title}</span>
      </Link>
    </StyledArticleItem>
  )
}

ArticleItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
}

export default ArticleItem
