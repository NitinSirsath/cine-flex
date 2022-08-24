import React, { useEffect , useState } from 'react'
import { requestMovies } from '../requests'
import { Container, TitleHeading, MenuLinks, MenuHeadingWrapper,RightMenuWrapper, InputWrapper, SelectOptionsWrapper,HamburgerMenuButton ,ToggleMenuLinks} from '../styles/NavbarStyles'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaGripLinesVertical} from 'react-icons/fa'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    // useEffect(() => {
    //     load()
    // },[])
    
    // const load = async () => {
    //     const response = await fetch(requestMovies.fetchTopRated)
    //     const data = await response.json()
    //     console.log(data);
    // }
    

  return (
    <div>
        <Container toggleMenu={toggleMenu}>
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