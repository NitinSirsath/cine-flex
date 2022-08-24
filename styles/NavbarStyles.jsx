import styled from "styled-components";

export const Container = styled.div`
color: white;
position: fixed;
top:0 ;
z-index: 11;
    padding: 0px 50px;
    /* height: ${(props) => (props.toggleMenu ? "100vh" : "70px")}; */
    height: 70px;
    width: 100%;
    background: linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3)50%);
    display: flex;
    align-items:center ;
    justify-content: space-between;
    
    @media only screen and (max-width: 800px){
       font-size: small;
       padding: 0px 30px;
    }
    @media (min-width: 700px) {
    height: 80px;
  }

    li{
        list-style:none ;
        margin: 0px 8px;
        
    }
    @media only screen and (max-width: 800px){
        li{
            margin: 0px 5px;
        }
    }
`
export const HamburgerMenuButton = styled.button`
    display: none;
    border: none;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;

    @media only screen and (max-width: 650px){
       display:flex ;
    }
    
`

export const TitleHeading = styled.div`
    color: red;
    font-weight: bold;
    font-size: 18px;
    padding-right: 10px;
    font-size: 24px;
`

export const MenuLinks = styled.div`
    display:flex ;

    @media only screen and (max-width: 650px){
       display:none ;

    }

`
export const MenuHeadingWrapper = styled.div`
    display:flex ;
    align-items: center;
`

export const RightMenuWrapper = styled.div`
    display: flex;

`
export const InputWrapper = styled.div`
        input{
            color: white;
            background-color: transparent;
            border: none;
            outline: none;
            border-bottom: 1px solid grey;

            @media only screen and (max-width: 700px){
                width: 80%;
                
            }
        }

        button{
            position:relative;
            right: 20px;
            background-color: transparent;
            border: none;
            outline: none;

            @media only screen and (max-width: 700px){
              display: none;
            }
        }
`

export const SelectOptionsWrapper = styled.select`
color: white;
    background-color: black;

    border: none;

    @media only screen and (max-width: 700px){
              margin: 0;
              padding: 0;
            }

`

export const ToggleMenuLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column ;
   align-items:center ;
   background-color: #d3d3d3c3;
`