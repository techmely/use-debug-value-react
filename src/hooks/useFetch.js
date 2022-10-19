import { useDebugValue, useEffect, useState } from "react";

export const useFetch = (url) => {
  useDebugValue(url, (url) => `url: ${url}`);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useDebugValue(error, (e) =>
    e ? `fetch failed due to ${e.message}` : "fetch successful"
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [setError, setResponse, url]);

  useDebugValue(response, (products) =>
    products?.length > 0
      ? products.map((product) => `title: ${product.title}`)
      : "empty"
  );

  return [response, loading, error];
};
