import styled from "styled-components";


export const Container = styled.div`
background-image: url(${props => props.image.src});
min-height: 100vh;
color: white;
padding-top: 100px;
`