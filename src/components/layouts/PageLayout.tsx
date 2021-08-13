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

  const handleSelectChange = (title: string, value: string) => {
    setQuery((prev) => ({ ...prev, [title]: value }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let searchObject = "";

    if (query.Name) {
      searchObject += !searchObject
        ? `/search?name=${query.Name}`
        : `&name=${query.Name}`;
      url.searchParams.delete("name");
      url.searchParams.append("name", query.Name);
    }

    if (query.Gender) {
      searchObject += !searchObject
        ? `/search?gender=${query.Gender}`
        : `&gender=${query.Gender}`;
      url.searchParams.delete("gender");
      url.searchParams.append("gender", query.Gender);
    }

    if (query.Species) {
      searchObject += !searchObject
        ? `/search?species=${query.Species}`
        : `&species=${query.Species}`;
      url.searchParams.delete("species");
      url.searchParams.append("species", query.Species);
    }

    if (query.Status) {
      searchObject += !searchObject
        ? `/search?status=${query.Status}`
        : `&status=${query.Status}`;
      url.searchParams.delete("status");
      url.searchParams.append("status", query.Status);
    }

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
