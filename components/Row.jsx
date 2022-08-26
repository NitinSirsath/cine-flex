import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { requestMovies } from '../requests'
import { Container ,TitleHeading, MovieCardWrapper,CardContainer,CardImage } from '../styles/Row.style'

const base_URL = "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchURL}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
     loadMovies()
      
    },[])

    const loadMovies = async () => {
        const response = await fetch(requestMovies.fetchTrending)
        const data = await response.json()
        setMovies(data.results)
     }

  return (
    <Container>
        <TitleHeading>{title}</TitleHeading>
        <MovieCardWrapper>
           {movies.map((movie,idx) => {
            return <CardContainer key={idx}>
                <Image src={`${base_URL}${movie?.poster_path}`} alt={movie?.title} height={140} width={245}/>
                {/* <CardImage background={`${base_URL}${movie?.poster_path}`}>helo</CardImage> */}
            </CardContainer>
           })}
        </MovieCardWrapper>
    </Container>
  )
}

export default Row;