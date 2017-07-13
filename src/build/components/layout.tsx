import * as React from 'react';

// TODO: add nav, footer

export interface LayoutProps {
  header: string;
}

export default class Layout extends React.Component<LayoutProps> {
  render() {
    return (
    <main>
      {(this.props.header) ? <h1>this.props.header</h1> : <h1>Welcome</h1>}
      {this.props.children}
    </main>
    );
  };
}
