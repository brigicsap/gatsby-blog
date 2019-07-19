import React from 'react'

import { StyledArticleList } from './ArticleStyles'

const ArticleList = ({children}) => {
  return (
    <StyledArticleList>
      {children}
    </StyledArticleList>
  )
}

export default ArticleList
