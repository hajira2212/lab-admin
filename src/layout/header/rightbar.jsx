import React, { Fragment, useState, useEffect } from 'react';
import man from '../../assets/images/user.png'
import { LogIn, User, Minimize } from 'react-feather';
import {
  translate,
} from 'react-switch-lang';
import { useHistory } from 'react-router-dom'

const Rightbar = (props) => {
  const history = useHistory();
  // const [profile, setProfile] = useState('');
  const [name, setName] = useState('')
  const [userType, setUserType] = useState('')
  const [moonlight, setMoonlight] = useState(false)

  // const authenticated = JSON.parse(localStorage.getItem("authenticated"));


  useEffect(() => {
    if (localStorage.getItem("layout_version") === "dark-only") {
      setMoonlight(true)
    }
    setUserType(localStorage.getItem('UserType'));
    setName(localStorage.getItem('Name'));
  }, []);

  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }


  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light)
      document.body.className = "light"
      localStorage.setItem('layout_version', 'light');
    } else {
      setMoonlight(!light)
      document.body.className = "dark-only"
      localStorage.setItem('layout_version', 'dark-only');
    }
  }



  const LogoutJWT = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Name");
    localStorage.setItem("authenticated", false)
    // localStorage.removeItem('cid');
    localStorage.removeItem('role');
    localStorage.removeItem('currentUser');
    console.log(userType);
    // if (userType === "INXPECTOR" || userType === 'MANAGER') {
      localStorage.removeItem("UserType");
      history.push(`${process.env.PUBLIC_URL}/login`);
    // } else {
    //   localStorage.removeItem("UserType");
    //   history.push(`${process.env.PUBLIC_URL}/login`);
    // }
  }

  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-header p-0">
        <ul className="nav-menus">
          {/* <li>
            <div className="mode" onClick={() => MoonlightToggle(moonlight)}><i className={`fa ${moonlight ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i></div>
          </li> */}
          <li className="maximize"><a className="text-dark" href="#javascript" onClick={goFull}><Minimize /></a></li>
          <li className="profile-nav onhover-dropdown p-0">
            <div className="media profile-media">
              <img className="b-r-10" src={man} alt="" />
              <div className="media-body"><span>{name}</span>
                <p className="mb-0 font-roboto">{userType} <i className="middle fa fa-angle-down"></i></p>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              <li><a href="/account">
                <User /><span> {"Account"} </span>
              </a></li>
              <li onClick={LogoutJWT}><LogIn /><span>{"Log Out"}</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>

  );
}
export default translate(Rightbar);