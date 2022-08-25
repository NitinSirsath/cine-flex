import styled from "styled-components";


export const Container = styled.div`
background-image: url(${props => props.image});
color: white;
background-size: cover;
background-position: center center;
background-color: black;
height: 500px;
padding-top: 100px;
`