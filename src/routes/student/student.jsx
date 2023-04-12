import React, {useEffect, useRef} from "react";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./student.scss"
import chatSvg from "../../assets/chat.svg"

const Student = () => {
  // let localStorageValue = {email: email, apiKey: 'xyz'};
  // localStorage.setItem('login', JSON.stringify(localStorageValue));
  const navigate = useNavigate();
  const loginInfoRef = useRef();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    try {
      let loginInfo = JSON.parse(localStorage.getItem('login'));
      if (loginInfo && loginInfo.email && loginInfo.apiKey) {
        loginInfoRef.current = (loginInfo)
      } else {
        navigate('/');
      }
    } catch (e) {
      navigate('/');
    }
  }, [navigate])

  return (
    <div className={'student'}>
      <div className={'navbar'}>
        <div className={'logo'}>
          <span style={{color: '#6fa3bd', marginRight: '12px'}}>Columbia</span>
          <span style={{color: '#0033A0', marginRight: '12px'}}>Connect</span>
        </div>
        <div className={'navs'}>
          <div className={'nav'}>
            <NavLink
              to={'resume'}
              className={() =>
                isActive('/student/resume')
                  ? "active"
                  : ""
              }
            >
              Resume review
            </NavLink>
            {isActive('/student/resume') ? <div className={'active-line'}></div> : ''}
          </div>
          <div className={'nav'}>
            <NavLink
              to={''}
              className={() =>
                isActive('/student')
                  ? "active"
                  : ""
              }
            >
              Referral
            </NavLink>
            {isActive('/student') ? <div className={'active-line'}></div> : ''}
          </div>
        </div>
        <div className={'chat-btn'}>
          <img alt={'chat'} src={chatSvg}/>
        </div>
        {/*<div className={'profile'}></div>*/}
      </div>
      <Outlet/>
    </div>
  )
};

export default Student