import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Movie, IMovie } from "./Movie";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=ad2c28e0345278f3c8b002efddadf28f";

export const MovieContainer = () => {
  const [movie, setMovie] = useState<IMovie[]>();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovie(data.results));
  }, []);
  return (
    <Container>
      {movie?.map((props) => (
        <Movie {...props} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 32px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 32px;
  }
`;
