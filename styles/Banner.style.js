import styled from "styled-components";
// RGBA(16,9,9,0.16)

export const Container = styled.div`
  background-image: radial-gradient(rgba(16, 9, 9, 0.16), rgba(16, 9, 9, 0.86)),
    url(${(props) => props.image});
  color: ${(props) => props.color};
  background-size: cover;
  background-position: center center;
  padding: 300px 0px 40px 50px;

  @media only screen and (max-width: 700px) {
  padding: 320px 15px 20px 10px;
  }

  p {
    width: 37%;

    @media only screen and (max-width: 700px) {
   width: 90%;
  }
  }
`;
