import styled from "styled-components";

export const Container = styled.div`
     background-color: rgba(26, 26, 26, 0.988);
     color: ${(props) => props.color};
     padding: 100px 50px 50px;
      
      @media only screen and (max-width:700px){
        padding: 100px 10px 10px;
      }

      h1{
        @media only screen and (max-width:700px) {
            text-align: center;
        }
      }
`