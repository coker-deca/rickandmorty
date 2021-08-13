import React, { ReactElement, useContext } from 'react';

import List from '../components/commons/List';
import { FetcherContext, useFetcher } from '../context/fetchContext';
import { PageWrapper } from './style';

const baseUrl = "https://rickandmortyapi.com/api/character/";

const SearchPage: React.FC = (): ReactElement => {
  const query = window.location.search.substring(1);
  const url = `${baseUrl}?${query}`;
  const { values, loading, error } = useContext(FetcherContext);
  useFetcher(url);

  return (
    <PageWrapper>
      {values.length && <List characters={values} />}
      {error && <h3>An Error as occurred please reload</h3>}
      {loading && <div className="loader">Loading...</div>}
    </PageWrapper>
  );
};

export default SearchPage;
