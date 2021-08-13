import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { SpecialDiv } from './style';

const ListUrls: FunctionComponent<{ urls: string[] }> = ({ urls }) => {
  return (
    <SpecialDiv>
      <ul>
        {urls?.map((url: string, index: number) => {
          const id = url.split("/")[url.split("/").length - 1];
          return (
            <li key={index}>
              <Link to={`/characters/${id}`}>Character {id}</Link>
            </li>
          );
        })}
      </ul>
    </SpecialDiv>
  );
};

export default ListUrls;
