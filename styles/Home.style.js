import styled from "styled-components";


export const Container = styled.div`
background-image: url(${props => props.image.src});
min-height: 300vh;
color: white;
padding-top: 100px;
`