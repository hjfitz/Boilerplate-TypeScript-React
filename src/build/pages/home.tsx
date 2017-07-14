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
      <Nav brandImg='pub/img/logo.png' />
      <div className="container">
        <div className="page-header">
          <h1>Cirrus Web Accelerator</h1>
          <h2 className="grey-text darken-2">React <span className="red-text">❤</span> TypeScript</h2>
        </div>
        <p>This is the react flavour of the Cirrus Web Accelerator.</p>

        <Alert>
          <b>Note: </b>This accelerator is powered by react-router-dom, a powerful, quick routing system for React. It also utilises TypeScript with React!
          It is <b>strongly</b> recommended that you read their <a href="https://github.com/ReactTraining/react-router#readme">documentation</a>
        </Alert>

        <div className="page-header">
          <h3>Getting started.</h3>
        </div>
        <p>
          To use this flavour of the web accelerator,
          create your react pages under: <code>src/components/pages</code>
          and import them into: <code>src/build/router.jsx</code>
        </p>

        <Alert>
          <b>Warning: </b>
          This example - and its components - uses bootstrap,
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
