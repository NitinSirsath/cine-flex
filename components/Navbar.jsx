import React, { useContext , useState } from 'react'
import { Container, TitleHeading, MenuLinks, MenuHeadingWrapper,RightMenuWrapper, InputWrapper, SelectOptionsWrapper,HamburgerMenuButton ,ToggleMenuLinks} from '../styles/NavbarStyles'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaGripLinesVertical} from 'react-icons/fa'
import { GlobalState } from '../pages/_app'
import Link from 'next/link'


const Navbar = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    if (typeof window !== "undefined") {
        window.onscroll = () => {
            setScrolled(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null)
        }
      }
    
  
  return (
    <div>
        <Container color={'white'} scrolled={scrolled} toggleMenu={toggleMenu}>
        <MenuHeadingWrapper >
            <TitleHeading>CINEFLEX</TitleHeading>
            <HamburgerMenuButton onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu? <FaGripLinesVertical /> :<GiHamburgerMenu />}</HamburgerMenuButton>
            <MenuLinks>
         
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/Movies'>Movies</Link></li>
                <li><Link href='/Series'>Series</Link></li>
                <li><Link href='/MyList'>My List</Link></li>
            </MenuLinks>
        </MenuHeadingWrapper>
        <RightMenuWrapper>
            <InputWrapper>
            <input type="text" placeholder='Search' />
            <button><BsSearch /></button>
            </InputWrapper>
            <SelectOptionsWrapper color={'white'}>
        <option value="All">All</option>
        <option value="Adult">Adult</option>
        <option value="Children">Children</option>
    </SelectOptionsWrapper>
    <li><Link href='/Register'>Register</Link></li>
    
        </RightMenuWrapper>
    </Container>
    {toggleMenu && (
        <ToggleMenuLinks color={'white'}>
               <li onClick={() => setToggleMenu( preV => !preV )}><Link href='/'>Home</Link></li>
                <li onClick={() => setToggleMenu( preV => !preV )}><Link href='/Movies'>Movies</Link></li>
                <li onClick={() => setToggleMenu( preV => !preV )}><Link href='/Series'>Series</Link></li>
                <li onClick={() => setToggleMenu( preV => !preV )}><Link href='/MyList'>My List</Link></li>
        </ToggleMenuLinks>
    )}
    </div>
  )
}

export default Navbar