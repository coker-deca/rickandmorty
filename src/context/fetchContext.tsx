import React, { createContext, useCallback, useEffect, useState } from 'react';

import { fetchHttpResponse } from '../utils/api';

export interface DataI {
  values: any[];
  fetchData: (url: string) => void;
  loading: boolean;
  error: Error | null;
}

export const fetcherContextDefaultValue: DataI = {
  values: [],
  fetchData: () => null,
  loading: false,
  error: null,
};

export const FetcherContext = createContext<DataI>(fetcherContextDefaultValue);

const useFetcherContext = () => {
  const [values, setValues] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    (url: string) => {
      setLoading(true);

      fetchHttpResponse(url, {})
        .then((result) => {
          setValues(result.data.results);
          console.log(result.data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    },
    [setValues]
  );

  return {
    values,
    loading,
    error,
    fetchData,
  };
};

export const FetcherProvider = (props: any) => (
  <FetcherContext.Provider value={useFetcherContext()} {...props} />
);

export const useFetcher = (url: string) => {
  const { fetchData } = React.useContext(FetcherContext);
  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);
};
