import React from 'react'
import bfilogo from "../../Assets/images/bfilogo.png"
import "../Login/Login.css"
import userIcon from "../../Assets/images/userIcon.png"
import pass from "../../Assets/images/pass.png"
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

function Login() {
    const login = () => {
        localStorage.setItem('isLoggedIn', true)
        window.location.reload()
    }
    return (
        <div className='login-main'>
            <div className="login-header">
                <img src={bfilogo} alt="bfi-logo-img" className="bfi-login-icon" />
            </div>
            <div className='login-body'>
                <div className='login-card'>
                    <img src={bfilogo} alt="bfi-logo-img" className="bfi-login-icon" />
                    <h3>User Login</h3>
                    <div className='login-form'>
                        <div className='login-form-username'>
                            <input type='text' placeholder='User ID' />
                            <img src={userIcon} alt="bfi-logo-img" className="username-icon" />
                        </div>
                        <div className='login-form-username'>
                            <input type='password' placeholder='password' />
                            <img src={pass} alt="bfi-logo-img" className="password-icon" />
                        </div>
                        <Button type='primary' style={{margin: '2vh'}} onClick={login}>Login</Button>
                        <span style={{fontWeight: '700', marginBottom: '5vh'}}>Forgot <span style={{color: 'rgba(0, 114, 188, 1)'}}>Password?</span></span>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Login