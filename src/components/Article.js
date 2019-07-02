import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Subline from './Subline'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
`

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`

const Article = ({ title, slug, timeToRead, categories }) => (
  <Post>
    <Title>
      <Link to={slug}>{title}</Link>
    </Title>
    <Subline>
      {timeToRead} Min Read &mdash; In{' '}
      {categories.map((cat, i) => (
        <React.Fragment key={cat}>
          {!!i && ', '}
          <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
        </React.Fragment>
      ))}
    </Subline>
  </Post>
)

export default Article

Article.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
}
