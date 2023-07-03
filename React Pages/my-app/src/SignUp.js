import React from 'react';
import './tablerc.css'
import logoImage from './logo.png';

function SignUp() {
    return ( <><div className="container1">
    <div className="mainbody">
      <h1 style={{marginLeft:"160px"}}>Sign Up</h1>
      <input className="fn" type="text" placeholder="Enter First Name" />
      <input className="ln" type="text" placeholder="Enter Last Name" />
      <input className="email" type="text" placeholder="Enter Address Name" />
      <input className="email1" type="text" min="10" max="10" placeholder="Enter Email Name" />
      <input className="Phone" type="text" min="10" max="10" placeholder="Enter Phone NO" />
      <input className="Password1" type="password" min="1" max="5" placeholder="Enter Password" />
      <input className="Password2" type="password" min="1" max="5" placeholder="Confirm Password" />

      <input className="reservebutton" type="submit" value={"Register"} />
    </div>
    <img src={logoImage} alt="logo" className="logo" />

    <h2>FOOD-E-STAAN</h2>
  </div></> );
}

export default SignUp;