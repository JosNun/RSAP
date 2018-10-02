import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: skyblue;
`;

export default () => {
  return <StyledNav>Hi I’m a nav</StyledNav>;
};
