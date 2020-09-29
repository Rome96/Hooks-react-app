import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setstate] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
       isMounted.current = false
    }
  }, []);

  useEffect(() => {
    setstate({
      data: null,
      error: null,
      loading: true,
    })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        isMounted.current && setstate({
          data,
          error: null,
          loading: false,
        });
      });
  }, [url]);

  return state;
};
