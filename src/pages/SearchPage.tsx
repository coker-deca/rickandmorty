import React, { ReactElement, useEffect, useState } from 'react';

import List from '../components/commons/List';
import { fetchHttpResponse } from '../utils/api';
import { PageWrapper } from './style';

const baseUrl = "https://rickandmortyapi.com/api/character/";

const SearchPage: React.FC = (): ReactElement => {
    // eslint-disable-next-line no-restricted-globals
    const query = location.search.substring(1);
    const url = `${baseUrl}?${query}`;
  const [characters, setCharacters] = useState<any>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    fetchHttpResponse(url.toString(), {})
      .then((result) => {
        setCharacters(result.data.results);
        result.status === 200 && setIsLoaded(true);
      })
      .catch((err) => setError(err));
  }, [url]);

    return (
      <PageWrapper>
        {isLoaded && !error && <List characters={characters} />}
        {error && <h3>An Error as occurred please reload</h3>}
        {!isLoaded && !error && <div className="loader">Loading...</div>}
      </PageWrapper>
    );
};

export default SearchPage;
