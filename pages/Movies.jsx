import React, { useCallback, useEffect, useState } from 'react'
import Row from '../components/Row'
import { Container } from '../styles/Movies.style'
import { requestMovies } from '../requests'
import { GlobalState } from './_app'
import { useContext } from 'react'

const Movies = () => {
    // const { allMovies, setAllMovies } = useContext(GlobalState)
    // const [contentType, setContentType] = useState('')


  
    return (
        <Container color={'white'}>
            <h1>MOVIES</h1>
            <select name="type" value='' onChange={setContentType} id="type">
                <option name='all' value="all" >All</option>
                <option name='children' value="children" >Children</option>
                <option name='adult' value="adult" >Adult</option>
            </select>
            <div>
                <Row fetchURL={requestMovies.fetchUpcoming} title={"TOP UPCOMING"} />
                <Row fetchURL={requestMovies.fetchPopular} title={"TOP LATEST"} />
                <Row fetchURL={requestMovies.fetchTrending} title={"TOP TRENDING"} />
                <Row fetchURL={requestMovies.fetchTopRated} title={"TOP RATED"} />
            </div>
        </Container>
    )
}

export default Movies