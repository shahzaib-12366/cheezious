import React from 'react'
import "../style/Login.css"
const Login = () => {

  return (
    <>
    <div className='modal'>
      <div className='background'>
        {/* <button type="button" class="btn-close " disabled aria-label="Close"> X </button> */}
        <h1>Enter your mobile number</h1>
        <h3> Please confirm your country code and enter your mobile number</h3>
        <input type="phone" name="phone" placeholder="Enter your Phone Number" ></input><br />
        <button className="login">Login</button> <br />
        <span className='line'>---------- OR ---------</span><br />
        <button className='guests'>Order as Guest</button><br />
      </div>
      </div>


    </>
  )
}

export default Login

