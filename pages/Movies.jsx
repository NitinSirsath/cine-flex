import React from 'react'
import Row from '../components/Row'
import { Container } from '../styles/Movies.style'
import { requestMovies } from '../requests'

const Movies = () => {
  return (
    <Container color={'white'}>
        <h1>MOVIES</h1>
        <div>
            <Row fetchURL={requestMovies.fetchUpcoming} title={"TOP UPCOMING"}/>
            <Row fetchURL={requestMovies.fetchPopular} title={"TOP LATEST"}/>
            <Row fetchURL={requestMovies.fetchTrending} title={"TOP TRENDING"}/>
            <Row fetchURL={requestMovies.fetchTopRated} title={"TOP RATED"}/>
        </div>
    </Container>
  ) 
}

export default Movies