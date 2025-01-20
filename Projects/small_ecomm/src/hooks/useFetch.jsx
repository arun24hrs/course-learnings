import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.products || data))
      .catch((err) => setError(err));
  }, [url]);

  return { data, error };
}

export default useFetch;