import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';


import { Home } from './home.tsx';

const router = (
  <BrowserRouter>
    <Route path='/' component={Home} />
  </BrowserRouter>
);


ReactDOM.render(
  // <Home message="hello, typescript!" />,
  router,
  document.getElementById('app')
);
