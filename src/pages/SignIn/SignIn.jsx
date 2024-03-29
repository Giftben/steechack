// import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import SignInImg from '../../components/SignInForm/signinimage.jsx'
import FacebookIcon from '../../assets/facebook-Vector.png'
import InstagramIcon from '../../assets/instagram-vector.png'
import GoogleIcon from '../../assets/google-vector.png'
import SignInForm from '../../components/SignInForm/signinform.jsx'
import './signin.css'
import SignInFooter from '../../components/Footer/SignInFooter.jsx'

function SignIn(){
    return (
      <>
      <div className='Sign-in-container'>
       <div >
          <SignInImg/>
      </div>
       <div className='hero-container'>
        <h1>Hello ! Welcome back.</h1>
        <p className='hero-text'> Welcome back! Please enter your data that you
             entered when you registered.</p>
      
        <SignInForm/>
        <h4>Or Login with </h4>
        <div className='social-media-container' >
          <figure className='social-media-icons'><img src={FacebookIcon} alt='Facebook Icon'/> </figure>
          <figure className='social-media-icons'><img src={GoogleIcon} alt='Google Icon'/> </figure>
          <figure className='social-media-icons'><img src={InstagramIcon} alt='Instagram Icon'/> </figure>
        </div>
        <p className='account-acknowledgement'>Don't have an account yet? <Link to='/Signup'>Sign Up</Link></p>
        </div> 
      </div>
      <SignInFooter/>
      </>
        

    )
  }


  export default SignIn;