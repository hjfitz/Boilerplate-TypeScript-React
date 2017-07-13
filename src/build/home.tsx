import * as React from 'react';
import { Nav } from './components/nav.tsx';

export interface HomeProps {
  message: string;
}

export class Home extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <div>
        <Nav brandImg="pub/img/logo.png" />
        <h1>{'Hello from typescript!'}</h1>
      </div>
    );
  }
}
