import React from 'react'
import './auth.css'
import Logo from '../../img/logo.png'

function Auth() {
  return (
    <>
      <div className='auth'>
        <div className='a-left'>
            <img src={Logo} alt='logo'/>
            <div className='webName'>
                <h1>Social Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>


        <h1>
            {/* <SignUp/> */}
            <Login/>
        </h1>
      </div>
    </>
  )
}

/**login form */

function Login(){
    return(
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Login</h3>

                <div>
                    <input type='text' placeholder='User Name' className='infoInput' name='username'/>
                </div>

                <div>
                    <input type='text' placeholder='Password' className='infoInput' name='password'/>
                </div>

                <div>
                    <span style={{fontSize:"12px"}}>Donot have an account Sign Up</span>
                </div>
                <button className='button infoButton' type='submit'>Login</button>
            </form>
        </div>
    )
}

/** signup form*/
function SignUp(){
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type='text' placeholder='First Name' className='infoInput' name='firstname'/>
                    <input type='text' placeholder='Last Name' className='infoInput' name='lastname'/>
                </div>

                <div>
                    <input type='text' placeholder='User Name' className='infoInput' name='username'/>
                </div>

                <div>
                    <input type='text' placeholder='Password' className='infoInput' name='password'/>
                    <input type='text' placeholder='Confirm Password' className='infoInput' name='confirmpass'/>
                </div>

                <div>
                    <span style={{fontSize:"12px"}}>Already have an account Login!</span>
                </div>
                <button className='button infoButton' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth
