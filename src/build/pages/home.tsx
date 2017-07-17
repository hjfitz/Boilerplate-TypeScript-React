import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../components/nav.tsx';
import { Panel } from '../components/panel.tsx';
import { Card } from '../components/card.tsx';
import { CodeBlock } from '../components/codeblock.tsx';
import { Footer } from '../components/footer.tsx';
import { Alert } from '../components/alert.tsx';

export interface HomeProps {
  message: string;
}

const height: string ='45px';

export class Home extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <div>
      <Nav />
      <div className="container">
        <div className="page-header">
          <h2 className="grey-text darken-2">React <span className="red-text">❤</span> TypeScript</h2>
        </div>

        <Alert>
          <p>This accelerator is powered by both React</p>
          <p>It's also powered by TypeScript. It's recommended you know what you're doing before working with this.</p>
          <p>Documentation:</p>
          <ul>
            <li><a href='https://facebook.github.io/react/'>React</a></li>
            <li><a href='https://reacttraining.com/react-router/'>React Router DOM</a></li>
            <li><a href='https://www.typescriptlang.org/'>TypeScript</a></li>
            <li><a href='https://www.typescriptlang.org/docs/handbook/react-&-webpack.html'>TypeScript x React x WebPack</a></li>
          </ul>
        </Alert>

        <div className="page-header">
          <h3>Getting started.</h3>
        </div>
        <Card>
          <p>Create your react pages under: <code>src/build/pages</code> and import them into: <code>src/build/router.jsx</code></p>
          <p>Ensure to create the interface for each component! Check <code>src/build/components/card.tsx</code> for a good example</p>
          <p>Create any extra components (Custom HTML elements) under <code>src/build/components</code> and import them in to your custom pages</p>
        </Card>

        <Alert>
          <b>Warning: </b>
          This example - and its components - uses some Bootstrap, but mostly Materialize,
          to change or extend this, modify/add your dependencies in
          <code>src/public/index.html</code>
        </Alert>

        <Card heading="Hyperlinks">
          <p>Hyperlinks (<code>href</code>) in this web accelerator are slightly different.</p>
          <p>Heres the basic usage:</p>
          <CodeBlock>{'<Link to="/demo">I\'m a link</Link>'}</CodeBlock>
          <Link to="/demo">I'm a link</Link>
        </Card>

        <Card heading="I'm a Card">
          <p>This Material Design Card is abstracted into a React component for reusability.</p>
          Check out <code>src/components/card.tsx</code> to see how.
        </Card>
        </div>

        <Footer height={height}>
          Footer
        </Footer>
</div>
    );
  }
}
