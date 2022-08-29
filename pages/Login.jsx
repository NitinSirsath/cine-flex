import Link from 'next/link'
import React from 'react'
import {Container,ContentWrapper,InputFieldWrapper,SignInButton,HelpSectionWrapper,CheckBoxWrapper,SingUpWrapper,GoogleWarning} from '../styles/Login.style'

const Login = () => {
  return (
    <Container color={'white'}>
        <ContentWrapper >
            <h1>Sign In</h1> 
            <InputFieldWrapper>
                <input type="text" placeholder='Email or phone number' />
                <input type="text" placeholder='Password ' />
            </InputFieldWrapper>
            <SignInButton>Sign In</SignInButton>
            <HelpSectionWrapper>
               <CheckBoxWrapper>
               <input type="checkbox" />
                <label htmlFor="">Remember me</label>
               </CheckBoxWrapper>
               <p>Need help?</p>
            </HelpSectionWrapper>
            <SingUpWrapper>
                <p>New to Netflix? <span><Link href='/Register'>Sign Up</Link></span></p>
                <GoogleWarning>This page is protected by Google reCAPTCHA to ensure you&#39;re not a bot. <span>Learn more.</span></GoogleWarning>
            </SingUpWrapper>
        </ContentWrapper>
    </Container>
  )
}

export default Login