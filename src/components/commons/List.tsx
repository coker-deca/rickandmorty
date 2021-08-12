import React, { ReactElement, useEffect, useState } from "react";
import ItemCard from "./Card";
import { ListBox } from "./style";

const List: React.FC<{characters: any[]}> = ({ characters }): ReactElement => {
    // const handleObserver = (() => {
    //     klll;
    // });

    // useEffect(() => {
    //     const options = {
    //       root: null,
    //       rootMargin: "0px",
    //       threshold: 1.0,
    //     };

    //     let observer = new IntersectionObserver(handleObserver, options);
    //     observer.observe(listRef);
    // });
    // const handlefilter = (searchQuery) => {
    //   setQuery(searchQuery);
    // };

        // const value = characters.filter((item: any) =>
        // item.name.toString().toLowerCase().indexOf(query.toLowerCase()) > -1);

        // setFilteredCharacters(value);

    // console.log(info);
    // console.log(characters);

    return (
      <ListBox>
        {characters.map((character: any) => (
              <ItemCard details={character}>
                <img src={character.image} alt={`${character.name} Thumb`} />
              </ItemCard>
            ))}
      </ListBox>
    );
}

export default List;
