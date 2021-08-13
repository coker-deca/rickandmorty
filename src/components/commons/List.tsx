import React, { ReactElement } from 'react';
import ListUrls from '../ui/ListUrls';

import ItemCard from './Card';
import { ListBox } from './style';

const List: React.FC<{ characters: any[] }> = ({
  characters,
}): ReactElement => (
  <ListBox>
    {characters.map((character: any, index: number) => (
      <ItemCard details={character} key={index}>
        {character.image ? (
          <img src={character.image} alt={`${character.name} Thumb`} />
        ) : (
          <ListUrls urls={character.characters || character.residents} />
        )}
      </ItemCard>
    ))}
  </ListBox>
);

export default List;
