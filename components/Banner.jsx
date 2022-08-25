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
        const response = await fetch(requestMovies.fetchTrending)
        const data = await response.json()
        setBannerMovie(data.results[Math.floor(Math.random()* data.results.length)])
     }
     console.log(bannerMovie);
  return (
    <Container image={Img}>
      baner  
    </Container>
  )
}

export default Banner