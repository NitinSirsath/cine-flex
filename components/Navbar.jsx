import React, { useEffect } from 'react'
import { requestMovies } from '../requests'
import { Container, TitleHeading, MenuLinks, MenuHeadingWrapper,RightMenuWrapper, InputWrapper, SelectOptionsWrapper } from '../styles/NavbarStyles'
import {BsSearch} from 'react-icons/bs'


const Navbar = () => {
    useEffect(() => {
        load()
    },[])
    
    const load = async () => {
        const response = await fetch(requestMovies.fetchTopRated)
        const data = await response.json()
        console.log(data);
    }
    

  return (
    <Container>
        <MenuHeadingWrapper>
            <TitleHeading>CINEFLEX</TitleHeading>
            <MenuLinks>
                <li>Home</li>
                <li>Movies</li>
                <li>Series</li>
                <li>My List</li>
            </MenuLinks>
        </MenuHeadingWrapper>
        <RightMenuWrapper>
            <InputWrapper>
            <input type="text" />
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
  )
}

export default Navbar