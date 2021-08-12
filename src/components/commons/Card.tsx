import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

import { Card } from './style';

const ItemCard: FunctionComponent<{ details: any }> = ({
  details,
  children,
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/characters/${details.id}`);
  }

  return (
    <Card>
      <h1>{details.name}</h1>
      <div className="card">
        {children}
        <div>
          <div className="caption">
            <h5>
              <span>{'From: '}</span>{details.origin?.name} <span>{' => lives on '}</span>
              <span>{details.location?.name}</span>
            </h5>
            <div>
              <b>Specie: </b><span>{details.species}</span><span>{`(${details.status})`}</span>
            </div>
            <footer>
              <button className="btn btn-default" onClick={handleClick}>More About {details.name}</button>
            </footer>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default ItemCard;