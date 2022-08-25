import React, {useState, useEffect} from 'react'
import Img from '../public/img.jpg'
import { Container } from '../styles/Banner.style'
import {requestMovies } from '../requests'


const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState([])

    useEffect(() => {
        loadBanner()
    },[])

    const loadBanner = async () => {
        const response = await fetch(requestMovies.fetchTopRated)
        const data = await response.json()
        setBannerMovie(data.results[Math.floor(Math.random()* data.results.length)])
     }
     console.log(bannerMovie?.backdrop_path);
  return (
    <Container image={`https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}`}>
      
      hhsfhd
    </Container>
  )
}

export default Banner