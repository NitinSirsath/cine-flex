import React, {useState, useEffect} from 'react'
import Img from '../public/img.jpg'
import { Container ,Button} from '../styles/Banner.style'
import {requestMovies, requestGenre } from '../requests'
import infoLogo from '../public/information.png'
import playLogo from '../public/play.png'



const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState([])
    const [showGenre, setShowGenre] = useState([])

    useEffect(() => {
        loadBanner()
        loadGenre()
    },[])

    const loadBanner = async () => {
        const response = await fetch(requestMovies.fetchTopRated)
        const data = await response.json()
        setBannerMovie(data.results[Math.floor(Math.random()* data.results.length)])
     }
     
     const genreId = bannerMovie.genre_ids

     const loadGenre = async () => {
        const response = await fetch(requestGenre.fetchGerne)
        const data = await response.json()
        setShowGenre(data.genres)
        
    }

    const getGenre1 = showGenre.filter((item) => {
        return item.id === genreId[0]
       })
    const getGenre2 = showGenre.filter((item) => {
        return item.id === genreId[1]
       })

       const gerne = [...getGenre1,...getGenre2]
      
     

    //  const getAllGenre =  (arr) => {
    //     const result = Object.entries(arr)
    //     for (let i = 0; i < result.length; i++) {
    //         const element = arr[i];
    //         return element
    //     }
    //  }
    //  const result = getAllGenre(genreId)
    //  console.log(result);

    
       
        
    //  const getGenre = genreId.map((element) => {
    //         showGenre.filter((item) => {
    //             return element.id ===item.id
    //         })
    //  })
     

     
    
  return (
    <Container color={'white'} image={`https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}`}>
      <h1>{bannerMovie?.name || bannerMovie?.title || bannerMovie?.original_name}</h1>
      <p>{bannerMovie?.overview}</p>
      <p>{gerne.map(element => <span key={element.id}>{element.name}</span>)}</p>
        <div>
            <Button> &#9654;   Play</Button>
            <Button>&#8505;  Info</Button>
        </div>
    </Container>
  )
}

export default Banner