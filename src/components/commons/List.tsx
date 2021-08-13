import React, { ReactElement } from "react";
import ItemCard from "./Card";
import { ListBox } from "./style";

const List: React.FC<{characters: any[]}> = ({ characters }): ReactElement => (
      <ListBox>
        {characters.map((character: any) => (
              <ItemCard details={character}>
                <img src={character.image} alt={`${character.name} Thumb`} />
              </ItemCard>
            ))}
      </ListBox>
    );

export default List;
