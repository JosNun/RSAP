import React from 'react';
import { Link, Router } from '@reach/router';
import styled from 'styled-components';

import Form from './components/Form/Form';
import Nav from './components/Nav/Navbar';

const MainContainer = styled.div`
  padding-left: 250px;
`;

const RoutedContainer = styled(Router)``;

export default () => {
  return (
    <MainContainer>
      Hey there, I'm your React app.
      <Nav />
      <RoutedContainer>
        <Form path="/form" />
      </RoutedContainer>
    </MainContainer>
  );
};
