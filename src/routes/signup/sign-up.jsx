import React, {useState, useContext} from "react";
import './sign-up.scss'
import {useNavigate} from "react-router-dom";
import AccountContext from "../../context/AccountContext";

export default function SignUp() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('option1');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [code, setCode] = useState('');

  const {signup, confirmRegistration} = useContext(AccountContext);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleRegistration = (event) => {
    event.preventDefault();
    signup(email, name, password, profile)
    .then(data => {
      console.log("Registration Successful", data);
    })
    .catch(err => {
      console.log("Failed to register", err.message);
    })
  }

  const handleConfirmation = (event) => {
    event.preventDefault();
    confirmRegistration(email, code)
    .then(data => {
      console.log("Authentication Successful", data);
      navigate('/');
    })
    .catch(err => {
      console.log("Failed to confirm authentication", err.message);
    })
  }

  return (
    <div className={'sign-up'}>
      <div className={'title'}>
        <span style={{color: '#6fa3bd', marginRight: '12px'}}>Columbia</span>
        <span style={{color: '#0033A0', marginRight: '12px'}}>Connect</span>
      </div>
      <div className={'login-box'}>
        <div className={'welcome'}>Welcome</div>
        <input value={email} onChange={(event) => setEmail(event.target.value)} className={'input-box'} type={'email'} placeholder={'Email (only CU emails supported)'}/>
        <input value={password} onChange={(event) => setPassword(event.target.value)} className={'input-box'} type={'password'} placeholder={'Password'}/>
        <input value={name} onChange={(event) => setName(event.target.value)} className={'input-box'} type={'text'} placeholder={'Name'}/>
        <input value={profile} onChange={(event) => setProfile(event.target.value)} className={'input-box'} type={'text'} placeholder={'Linked In profile'}/>
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
        <div class="verification-holder">
          <input value={code} onChange={(event) => setCode(event.target.value)} class="form-control" placeholder='Enter Code'/>
          <button type="submit" class="btn" onClick={handleRegistration}> Send Code </button>
        </div> 
        <button className={'login-btn'} onClick={handleConfirmation} href={'/'}>Sign-up</button>
        <div>
          <span>Already have an account? </span>
          <a className={'sign-up-btn'} href={'/'}>Login</a>
        </div>
      </div>
    </div>
  )
}