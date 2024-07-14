import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setcurrentState] = useState("Login")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>: <input type="text" placeholder='Your Name' required />
}
            <input type="text" placeholder='Your Email' required />
            <input type="text" placeholder='Password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create Account" :"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Login"
        ?<p>Cretae a new Account? <span onClick={()=>setcurrentState("Sign Up")} >Click Here</span></p>
        :<p>Already have an Account <span onClick={()=>setcurrentState("Login")} >Login Here</span></p>

        }
      </form>
    </div>
  )
}

export default LoginPopup
