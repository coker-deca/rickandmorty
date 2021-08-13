import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SearchBar from '../commons/FilterBox';
import Footer from './Footer';
import { Container } from './style';

const baseUrl = "https://rickandmortyapi.com/api/character/";

const PageLayout: React.FC = ({ children }) => {
  const url = new URL(baseUrl);
  const history = useHistory();

  const [query, setQuery] = useState({Name: "",Gender: "", Status: "", Species: ""});

  const handleSearch = (searchQuery: string) => {
    setQuery((prev)=>({...prev, Name: searchQuery}));
  };

  const handleSelectChange = (value: any) => {
    setQuery((prev) => ({ ...prev, ...value }));
    console.log(value);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const searchObject = `/search?name=${query}`;
    url.searchParams.delete("name");
    url.searchParams.append("name", query.Name);
    history.push(searchObject);
  };

  return (
    <Container>
      <SearchBar
        keyword={query.Name}
        setKeyword={handleSearch}
        handleClick={handleClick}
        handleSelectChange={handleSelectChange}
      />
      <div>{children}</div>
      <Footer isMobile={false} />
    </Container>
  );
};

export default PageLayout;
