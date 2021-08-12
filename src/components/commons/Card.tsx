import React, { FunctionComponent } from 'react';

import { Card } from './style';

const ItemCard: FunctionComponent<{ details: any }> = ({
  details,
  children,
}) => (
  <Card>
    <h1>{details.name}</h1>
    <div className="card">
      {children}
      <div>
        <div className="caption">
          <h5>
            <span>{'From: '}</span>{details.origin.name} <span>{' => Lives in '}</span>
            <span>{details.location.name}</span>
          </h5>
          <div>
            <b>Specie: </b><span>{details.species}</span><span>{`(${details.status})`}</span>
          </div>
          <footer>
            <button className="btn btn-default">More About {details.name}</button>
          </footer>
        </div>
      </div>
    </div>
  </Card>
);

export default ItemCard;