import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { createContext } from "react";
import { useState } from "react";

export const GlobalState = createContext();

// export const NavbarWithNoSSR = dynamic(() => import('../components/Navbar'), {
//   ssr: false,
// })

function MyApp({ Component, pageProps }) {
  
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])

  const value = {
    movies,
    setMovies,
    allMovies,
    setAllMovies
  };

  return (
    <GlobalState.Provider value={value}>
      <Navbar />
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}

export default MyApp;
