import * as React from 'react';

// panel and heading must share the same types for their properies
// because heading is a child of panel
// children and heading are optional, heading doesn't need any children
// a panel doesn't always have a heading.
export interface panelProps { children?: any, heading?: string }

export const condHeader = (props: panelProps) => {
  if (props.heading) {
    return <div className="panel-heading">{props.heading}</div>;
  }
};

export const Panel = (props: panelProps) => {
  return (
    <div className="panel panel-default">
      {condHeader(props)}
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  );
}
