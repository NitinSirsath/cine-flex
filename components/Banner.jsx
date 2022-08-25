import React, {useState, useEffect} from 'react'
import Img from '../public/img.jpg'
import { Container } from '../styles/Banner.style'
import {requestMovies, requestGenre } from '../requests'


const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState([])
    // const [showGenre, setShowGenre] = useState([])

    useEffect(() => {
        loadBanner()
        // loadGenre()
    },[])

    const loadBanner = async () => {
        const response = await fetch(requestMovies.fetchTopRated)
        const data = await response.json()
        setBannerMovie(data.results[Math.floor(Math.random()* data.results.length)])
     }

    //  const loadGenre = async () => {
    //     const response = await fetch(requestGenre.fetchGerne)
    //     const data = await response.json()
    //     const getGenre = data.genres?.filter((item) => {
    //         return item === bannerMovie?.genre_ids[1]
    //     })
    //     setShowGenre(getGenre)
    //     // console.log(data.genres);
    //  }
    //  console.log(showGenre,'genre');

     
    
  return (
    <Container color={'white'} image={`https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}`}>
      <h1>{bannerMovie?.name || bannerMovie?.title || bannerMovie?.original_name}</h1>
      <p>{bannerMovie?.overview}</p>
      <p></p>
    </Container>
  )
}

export default Banner