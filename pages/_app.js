import Navbar from '../components/Navbar'
import '../styles/globals.css'
import dynamic from 'next/dynamic'

export const NavbarWithNoSSR = dynamic(() => import('../components/Navbar'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return <div>
    <NavbarWithNoSSR />
    <Component {...pageProps} />
  </div>
}

export default MyApp
