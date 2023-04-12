import React, {useRef} from "react";
import './home.scss'
import {useNavigate} from "react-router-dom";

export default function Home() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate();

  const onLoginClick = () => {
    let email = emailRef.current.value
    // let password = passwordRef.current.value

    // TODO: Login api call here

    let localStorageValue = {email: email, apiKey: 'xyz'};
    localStorage.setItem('login', JSON.stringify(localStorageValue));
    navigate('/student');
  }

  return (
    <div className={'home'}>
      <div className={'title'}>
        <span style={{color: '#6fa3bd', marginRight: '12px'}}>Columbia</span>
        <span style={{color: '#0033A0', marginRight: '12px'}}>Connect</span>
      </div>
      <div className={'login-box'}>
        <div className={'welcome'}>Welcome</div>
        <input ref={emailRef} type={'email'} placeholder={'Email'}/>
        <input ref={passwordRef} type={'password'} placeholder={'Password'}/>
        <button onClick={onLoginClick} className={'login-btn'}>Login</button>
        <div>
          <span>Don't have an account? </span>
          <a href={'sign-up'} className={'sign-up-btn'}>Sign up</a>
        </div>
      </div>
    </div>
  )
}