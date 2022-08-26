import styled from "styled-components";

export const Container = styled.div `
 padding: 5px 50px;
    overflow-y: hidden;
    overflow-x: scroll;
`

export const TitleHeading = styled.h2 `
    font-weight: light;
`

export const MovieCardWrapper = styled.div `
display: flex;
width: max-content;
`

export const CardContainer = styled.div`
    margin-right: 6px;
        /* object-fit: contain; */
`

// export const CardImage = styled.div`
//     height: 150px;
//     width: 250px;
//     background-image: ${(props) => props.background};
//     background-position: center center;
//     background-size: contain;
//     background-repeat:no-repeat;
//     border: 1px solid white;
// `