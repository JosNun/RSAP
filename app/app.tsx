import React from 'react';
import { Link, Router } from '@reach/router';

import Form from './components/Form/Form';

export default () => {
  return (
    <div>
      Hey there, I'm your React app.
      <nav>Nav goes here</nav>
      <Router>
        <Form path="/form" />
      </Router>
    </div>
  );
};
