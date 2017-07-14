import * as React from 'react';

export interface ICodeBlock {
  children: any;
}

export const CodeBlock = (props: ICodeBlock) => {
  return (
    <div className='well'>
      <code>
        {props.children}
      </code>
    </div>
  );
};
