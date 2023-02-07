import React, { useState } from "react";
import styled from "styled-components";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export interface IMovie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}
export const Movie = (props: IMovie) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Container onClick={() => setShowDetails(!showDetails)}>
      <TitleContainer>
        <h1>{props.title}</h1>
        <b>{props.vote_average}</b>
      </TitleContainer>
      <img src={BASE_URL + props.poster_path} alt={props.title} />
      {showDetails && <p>{props.overview}</p>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  * {
    font-size: 1.2rem;
  }
`;
