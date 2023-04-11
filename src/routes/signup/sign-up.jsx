import React, {useState} from "react";
import './sign-up.scss'

export default function SignUp() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className={'sign-up'}>
      <div className={'title'}>
        <span style={{color: '#6fa3bd', marginRight: '12px'}}>Columbia</span>
        <span style={{color: '#0033A0', marginRight: '12px'}}>Connect</span>
      </div>
      <div className={'login-box'}>
        <div className={'welcome'}>Welcome</div>
        <input className={'input-box'} type={'text'} placeholder={'Email (only CU emails supported)'}/>
        <input className={'input-box'} type={'password'} placeholder={'Password'}/>
        <input className={'input-box'} type={'text'} placeholder={'Name'}/>
        <input className={'input-box'} type={'text'} placeholder={'Linked In profile'}/>
        <div className={'radio-group'}>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
            Alumni
          </label>
        </div>
        <button className={'login-btn'}>Sign-up</button>
        <div>
          <span>Already have an account? </span>
          <a className={'sign-up-btn'} href={'/'}>Login</a>
        </div>
      </div>
    </div>
  )
}