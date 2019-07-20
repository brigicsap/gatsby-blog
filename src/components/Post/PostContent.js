import React from 'react';

import { StyledPostContent } from './PostStyles'

const PostContent = ({content}) => {
  return (
    <StyledPostContent dangerouslySetInnerHTML={{ __html: content }}/>
  )
}

export default PostContent
