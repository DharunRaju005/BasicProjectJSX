import { useEffect, useState } from "react";
import styled from "styled-components";

const UseFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setPending(false);
      const response = await fetch(url, { ...option });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError("${e} occured!!!!");
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default UseFetch;
