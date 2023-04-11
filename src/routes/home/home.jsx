import React from "react";
import './home.scss'
export default function Home() {
  return (
    <div className={'home'}>
      <div className={'title'}>
        <span style={{color: '#6fa3bd', marginRight: '12px'}}>Columbia</span>
        <span style={{color: '#0033A0', marginRight: '12px'}}>Connect</span>
      </div>
      <div className={'login-box'}>
        <div className={'welcome'}>Welcome</div>
        <input type={'text'} placeholder={'Email'}/>
        <input type={'password'} placeholder={'Password'}/>
        <button className={'login-btn'}>Login</button>
        <div>
          <span>Don't have an account? </span>
          <a href={'sign-up'} className={'sign-up-btn'}>Sign up</a>
        </div>
      </div>
    </div>
  )
}