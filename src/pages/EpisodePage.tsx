import React, { ReactElement, useContext } from "react";

import List from "../components/commons/List";
import { FetcherContext, useFetcher } from "../context/fetchContext";
import { PageWrapper } from "./style";

const baseUrl = "https://rickandmortyapi.com/api/episode";

const EpisodesPage: React.FC = (): ReactElement => {
  const url = new URL(baseUrl);

  const { values, loading, error } = useContext(FetcherContext);
  useFetcher(url.toString());

  return (
    <PageWrapper>
      {values && <List characters={values} />}
      {error && <h3>An Error as occurred please reload</h3>}
      {loading && <div className="loader">Loading...</div>}
    </PageWrapper>
  );
};

export default EpisodesPage;
