import React from 'react';
import styled from 'styled-components'

const StyledMain = styled.div`
  padding: 10rem 1rem;
`

const Container = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Container;
