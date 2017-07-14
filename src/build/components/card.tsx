import * as React from 'react';

// panel and heading must share the same types for their properies
// because heading is a child of panel
// children and heading are optional, heading doesn't need any children
// a panel doesn't always have a heading.
export interface ICard {
  children?: any,
  heading?: string,
  cardColor?: string
}

export const condHeader = (props: ICard) => {
  if (props.heading) {
    return <span className="card-title">{props.heading}</span>;
  }
};

export const Card = (props: ICard) => {
  const cardClass = `card ${props.cardColor}`;
  return (
    <div className='row'>
      <div className='col s12 m12'>
        <div className={cardClass}>
          <div className="card-content">
            {condHeader(props)}
              {props.children}
          </div>

        </div>
      </div>
    </div>

  )
  // return (
  //   <div className="panel panel-default">
  //     {condHeader(props)}
  //     <div className="panel-body">
  //       {props.children}
  //     </div>
  //   </div>
  // );
}
