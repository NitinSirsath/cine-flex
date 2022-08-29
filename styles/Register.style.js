import styled from "styled-components";


export const Container = styled.div`
display:flex ;
justify-content:center ;
align-items: center;
min-height: 100vh;
background-color: black;
color: ${(props) => props.color};
background-image: linear-gradient(0deg,rgba(1,2,1,1) 0,transparent 60%,rgba(0,0,0,1)),url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/9c08772c-0ce8-4813-b503-93859177a146/IN-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg');

`

export const ContentWrapper = styled.div`
width: 55%;
text-align:center ;

h1{
        font-size: 4.2rem;
        margin:0 ;
    }

    h3{
        font-weight: 400;
        font-size: 1.6rem;
    }

    p{
        font-size: 1.2rem;
    }
    div{
        display:flex ;
        justify-content: center;
        
            input{
                padding: 19px 16px;
                width: 67%;
            }
        
            button{
                padding: 19px 32px;
                background-color: red;
                color: white;
                font-size: large;
                font-weight:bold ;
                border: none;
                outline:none ;
                
            }
    }

`

export const LoginButton = styled.button`
 margin-top: 20px;
        padding: 12px 15px;
        border: none;
        outline: none;
        font-size:medium ;
        font-weight:bold ;
        background-color:red ;
        color: white;
        border-radius: 4px;
`