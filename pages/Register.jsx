import React from 'react'
import { Container ,ContentWrapper,LoginButton} from '../styles/Register.style'
import backgroundImage from '../public/register.jpg'
import Link from 'next/link'

const Register = () => {
  return (
    <Container color={'white'} image={backgroundImage}>
        <ContentWrapper>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div>
                <input type="text" placeholder='Email Address'/>
                <button>Get Started</button>
            </div>
            <LoginButton><Link href='/Login'>Sign In</Link></LoginButton>
        </ContentWrapper>
    </Container>
  )
}

export default Register