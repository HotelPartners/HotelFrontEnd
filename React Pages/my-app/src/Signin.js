import React from 'react';
import './Login.css';
import logo from './logo.png';
import userIcon from './login.png';
import passwordIcon from './password.png';

function Signin() {
    return ( <><div className="main">
    <div className="container4">
      <img src={logo} className="logo1" alt="" />
      <p className="logo"> FOOD-E-STAAN </p>
    </div>
    <div className="container">
      <p className="heading">USER LOGIN</p>
      <div className="container3">
        <img src={userIcon} alt="" />
        <input className="input" type="text" placeholder="User Id" />
      </div>
      <div className="container3">
        <img src={passwordIcon} alt="" />
        <input className="input" type="text" placeholder="Password" />
      </div>
      <br />
      <button className="log_button">LOG IN</button>
      <div className="container2">
        <p className="for_password"><a href="#">Forgot Password?</a></p>
        <p className="sign_up"><a href="">New User? Register</a></p>
      </div>
      <p className="support">Contact us: 1234567890</p>
      <p className="support">Email: admin@gmail.com</p>
    </div>
  </div></> );
}

export default Signin;