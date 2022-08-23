import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 50px;
    height: 70px;
    width: 100%;
    background-color: #d3d3d3c3;
    display: flex;
    align-items:center ;
    justify-content: space-between;
    @media only screen and (max-width: 800px){
       font-size: small;
       padding: 0px 30px;
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

export const TitleHeading = styled.div`
    color: red;
    font-weight: bold;
    font-size: 18px;
    padding-right: 10px;
`

export const MenuLinks = styled.div`
    display:flex ;

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
            background-color: transparent;
            border: none;
            outline: none;
            border-bottom: 1px solid grey;
        }

        button{
            position:relative;
            right: 20px;
            background-color: transparent;
            border: none;
            outline: none;
        }
`

export const SelectOptionsWrapper = styled.select`
    background-color: transparent;
    border: none;
`