
import React, { useEffect, useState } from 'react'

import { Container ,TitleHeading, MovieCardWrapper,CardContainer,ImageCard } from '../styles/Row.style'

const base_URL = "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchURL}) => {
    const [movies, setMovies] = useState([])
    // console.log(fetchURL,'url');
    useEffect(() => {
     loadMovies()
      
    },[])

    const loadMovies = async () => {
        const response = await fetch(fetchURL)
        const data = await response.json()
        setMovies(data.results)
     }

  return (
    <Container>
        <TitleHeading>{title}</TitleHeading>
        <MovieCardWrapper>
           {movies.map((movie,idx) => {
            return <CardContainer key={idx}>
                <ImageCard src={`${base_URL}${movie?.poster_path}`} alt={movie?.title} height={280} width={225}/>
                {/* <CardImage background={`${base_URL}${movie?.poster_path}`}>helo</CardImage> */}
            </CardContainer>
           })}
        </MovieCardWrapper>
    </Container>
  )
}

export default Row;