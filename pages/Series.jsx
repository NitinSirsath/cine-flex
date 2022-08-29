import React from 'react'
import Row from '../components/Row'
import { Container } from '../styles/Movies.style'
import { requestSeries } from '../requests'

const Series = () => {
  return (
    <Container color={'white'}>
    <h1>Series</h1>
    <div>
        <Row fetchURL={requestSeries.fetchPopular} title={"TOP Popular"}/>
        <Row fetchURL={requestSeries.fetchTopRated} title={"TOP RATED"}/>
        {/* <Row fetchURL={requestSeries.fetchLatest} title={"TOP LATEST"}/> */}
        <Row fetchURL={requestSeries.fetchAiringToday} title={"TOP AIRING"}/>
    </div>
</Container>
  )
}

export default Series