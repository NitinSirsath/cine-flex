import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../pages/_app";

import {
  Container,
  TitleHeading,
  MovieCardWrapper,
  CardContainer,
  ImageCard,
} from "../styles/Row.style";

const base_URL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

    // const {movies ,setMovies} = useContext(GlobalState)
    // const {allMovies ,setAllMovies} = useContext(GlobalState)
  
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const response = await fetch(fetchURL);
    const data = await response.json();
    setMovies(data.results);
    // setAllMovies((old)=>[...old,data.results])
  };



  return (
    <Container>
      <TitleHeading>{title}</TitleHeading>
      <MovieCardWrapper>
        {movies.map((movie) => {
          return (
            <CardContainer key={movie.id}>
              <ImageCard
                src={`${base_URL}${movie?.poster_path}`}
                alt={movie?.title}
                height={280}
                width={225}
              />
              {/* <CardImage background={`${base_URL}${movie?.poster_path}`}>helo</CardImage> */}
            </CardContainer>
          );
        })}
      </MovieCardWrapper>
    </Container>
  );
};

export default Row;
