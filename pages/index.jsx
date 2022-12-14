import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Row from '../components/Row'
import styles from '../styles/Home.module.css'
import {Container} from '../styles/Home.style'
import {requestMovies, requestSeries} from '../requests'
 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CineFlex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container color={'white'}>
      <Banner />
      <Row  title={'Top Trending'} fetchURL={requestMovies?.fetchTrending}/>
      {/* <Row  title={'Latest Series'} fetchURL={requestSeries?.fetchLatest}/> */}
      <Row  title={'Most Popolar'} fetchURL={requestMovies.fetchPopular}/>
      <Row  title={'Top Rated'} fetchURL={requestMovies.fetchTopRated}/>
      <Row  title={'Airing Today'} fetchURL={requestSeries.fetchAiringToday}/>
    </Container>
      
    </div>
  )
}


