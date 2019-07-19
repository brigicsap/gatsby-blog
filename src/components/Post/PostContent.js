import React from 'react';

import { StyledPostContent } from './PostContentStyles'

const PostContent = ({content}) => {
  return (
    <StyledPostContent dangerouslySetInnerHTML={{ __html: content }}/>
  )
}

export default PostContent
