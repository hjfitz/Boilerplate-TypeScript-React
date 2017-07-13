import * as React from 'react';

export interface NavProps {
  brandImg: string;
};

export const Nav = (props: NavProps) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img alt="Brand" src={props.brandImg} height="30px" />
          </a>
        </div>
      </div>
    </nav>
  );
};
