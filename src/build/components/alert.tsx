import * as React from 'react';

export interface IAlert { children?: any }

export const Alert = (props: IAlert) => {
  return (
    <div className="alert alert-warning z-depth-1" role="alert">
      {props.children}
    </div>
  );
};
