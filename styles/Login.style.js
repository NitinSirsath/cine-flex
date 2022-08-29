import styled from "styled-components"

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
    width: 28%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.679);
    padding: 100px 50px;
    
`
export const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

        input{
            width: 90%;
            padding: 11px 15px;
            background: #333;
            border: none;
            color: white;
            outline: none;
            border-radius: 3px;
        }
`

export const SignInButton = styled.button`
width: 90%;
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

export const HelpSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b3b3b3;
`

export const CheckBoxWrapper =styled.div`
    display: flex;
     align-items: center;

`

export const SingUpWrapper = styled.div`
    color: #b3b3b3;
        margin-top: 40px;
        span{
        color: white;
    }
        
`

export const GoogleWarning = styled.p`
    font-size: 14px;
    span{
        color: #0071eb;
        cursor: pointer;
    }
`