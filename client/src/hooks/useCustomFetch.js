import React, { useState, useEffect } from 'react';

export const useCustomFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function customFetch(url) {
    try {
      let response = await fetch(url);
      let rData = await response.json();

      setData({ rData });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (url) {
        customFetch(url);
      }
    }, 3000);
  }, [url]);

  return [data, loading, error];
};

export default useCustomFetch;
