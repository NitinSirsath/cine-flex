import React, { useContext , useState } from 'react'
import { Container, TitleHeading, MenuLinks, MenuHeadingWrapper,RightMenuWrapper, InputWrapper, SelectOptionsWrapper,HamburgerMenuButton ,ToggleMenuLinks} from '../styles/NavbarStyles'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaGripLinesVertical} from 'react-icons/fa'
import { GlobalState } from '../pages/_app'


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
        <Container scrolled={scrolled} toggleMenu={toggleMenu}>
        <MenuHeadingWrapper >
            <TitleHeading>CINEFLEX</TitleHeading>
            <HamburgerMenuButton onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu? <FaGripLinesVertical /> :<GiHamburgerMenu />}</HamburgerMenuButton>
            <MenuLinks>
         
                <li>Home</li>
                <li>Movies</li>
                <li>Series</li>
                <li>My List</li>
            </MenuLinks>
        </MenuHeadingWrapper>
        <RightMenuWrapper>
            <InputWrapper>
            <input type="text" placeholder='Search' />
            <button><BsSearch /></button>
            </InputWrapper>
            <SelectOptionsWrapper>
        <option value="All">All</option>
        <option value="Adult">Adult</option>
        <option value="Children">Children</option>
    </SelectOptionsWrapper>
    <li>Register</li>
    
        </RightMenuWrapper>
    </Container>
    {toggleMenu && (
        <ToggleMenuLinks>
                <li onClick={() => setToggleMenu(!toggleMenu)}>Hom1e</li>
                <li>Movies</li>
                <li>Series</li>
                <li>My List</li> 
        </ToggleMenuLinks>
    )}
    </div>
  )
}

export default Navbar