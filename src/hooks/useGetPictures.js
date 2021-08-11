import React from "react";

export const useGetPictures = () => {
  const [results, setResults] = React.useState({
    loading: false,
    error: false,
    data: [],
  });

  const callApi = async (query) => {
    setResults({
      data: [],
      loading: true,
      error: false,
    });

    try {
      if (!query) throw Error();
      const response = await fetch(process.env.REACT_APP_TEST_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          query,
        }),
      });

      const { results: pics } = await response.json();

      if (pics.length === 0) {
        setResults((data) => {
          return { ...data, loading: false, error: true };
        });
      } else {
        setResults({ data: pics, laoding: false, error: false });
      }
    } catch (error) {
      setResults((data) => {
        return { ...data, loading: false, error: true };
      });
    }
  };

  return [results, callApi];
};
