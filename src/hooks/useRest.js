import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import { useEffect, useState } from "react";

export const useRest = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(camelcaseKeys(result.data));
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, hasError, isLoading }, setUrl];
};
