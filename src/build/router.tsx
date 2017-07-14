import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';


import { Home } from './pages/home.tsx';
import { Demo } from './pages/demo.tsx';
import { Template } from './template.tsx';

// const router = (
//   <BrowserRouter>
//     <Route component={Template}>
//       <Route path='/' component={Home} />
//       <Route path='/demo' component={Demo} />
//     </Route>
//   </BrowserRouter>
// );

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/demo' component={Demo}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  router,
  document.getElementById('app')
);
