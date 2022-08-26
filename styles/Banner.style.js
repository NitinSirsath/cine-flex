import styled from "styled-components";
// RGBA(16,9,9,0.16)

export const Container = styled.div`
  background-image: radial-gradient(rgba(16, 9, 9, 0.16), rgba(16, 9, 9, 0.86)),
    url(${(props) => props.image});
  color: ${(props) => props.color};
  background-size: cover;
  background-position: center center;
  padding: 300px 0px 40px 100px;

  span{
    margin-right: 10px;
    color: red;
  }

  @media only screen and (max-width: 700px) {
  padding: 320px 15px 20px 10px;
  }

  h1{
    font-size: 4.6rem;
    margin: 20px 0px;
    color: yellow;

    @media only screen and (max-width: 700px) {
        font-size: 3.2rem;
    }
  }

  p {
    width: 37%;
    font-size: 1rem;
    color: lightgrey;

    @media only screen and (max-width: 700px) {
        width: 90%;
    }
  }
`;

// export ButtonWrapper = styled.di

export const Button = styled.button`
    cursor: pointer;
    padding: 10px 17px;
    margin-right: 10px;
    border-radius: 4px;
    border: none;
    background-color: rgba(239, 233, 233, 1.714);
    font-weight: bold;
    font-size: medium;

    &:hover{
        background-color: rgba(239, 233, 233, 0.814);
    }

    @media only screen and (max-width: 700px) {
   padding: 8px 10px;
   
  }
`


