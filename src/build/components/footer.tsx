import * as React from 'react';

import { Panel } from './panel.tsx';

export interface IFooter { height?: string, children?: any }

export const Footer = (props: IFooter) => {
  return (
    <footer style={
      {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: props.height,
        borderTop: '1px solid #e7e7e7',
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
        paddingTop: '10px',
        width: '100%',
      }
    }>
      {props.children}
    </footer>
  );
};
