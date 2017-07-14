import * as React from 'react';
// import * as $ from 'jquery';
import { Nav } from './components/nav.tsx';
import { Footer } from './components/footer.tsx';

const footerHeight: string ='45px';

export interface ITemplate { children?: any }

export const Template = (props: ITemplate) => {
  return (
    <div>
      <Nav brandImg="public/img/logo.png" />

      <div className="container">
        {props.children}
      </div>

      <Footer height={footerHeight}>
        Footer
      </Footer>
    </div>
  );
};
