import {useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [state, setstate] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setstate({
          data,
          error: null,
          loading: false,
        })
      });
  }, [url]);

  return state;
};
