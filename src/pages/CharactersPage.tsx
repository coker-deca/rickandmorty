import React, { ReactElement, useEffect, useState } from 'react';

import List from '../components/commons/List';
import { fetchHttpResponse } from '../utils/api';
import { PageWrapper } from './style';

const baseUrl = "https://rickandmortyapi.com/api/character/";

const CharactersPage: React.FC = (): ReactElement => {
  const url = new URL(baseUrl);
  const [characters, setCharacters] = useState<any>([]);
  const [error, setError] = useState(null);
  // const [info, setInfo] = useState<any>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  fetchHttpResponse(url.toString(), {})
    .then((result) => {
      console.log(result);
      setCharacters(result.data.results);
      result.status === 200 && setIsLoaded(true);
      // setInfo(result.data.info);
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

export default CharactersPage;
