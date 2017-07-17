import * as React from 'react';

export interface NavProps {
  brandImg?: string,
  title?: string
};

export const Nav = (props: NavProps) => {
  return (
    <nav className='white'>
      <div className="nav-wrapper">
        {props.brandImg ? <a href="#" className="brand-logo"><img alt="Brand" src={props.brandImg} height="30px" /></a> : undefined}
      </div>
    </nav>
  );
};
