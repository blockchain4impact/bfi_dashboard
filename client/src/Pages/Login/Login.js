import React, {useState} from 'react'
import bfilogo from "../../Assets/images/bfilogo.png"
import "../Login/Login.css"
import userIcon from "../../Assets/images/userIcon.png"
import pass from "../../Assets/images/pass.png"
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [visible,setVisible] = useState(false)
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const login = () => {
        if(data.userid === 'info@blockchainforimpact.in' && data.password === 'Welcome2024!'){
        localStorage.setItem('isLoggedIn', true)
        navigate('/')
        window.location.reload()
        }else{
            alert('incorrect userID or password')
        }
    }
    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    return (
        <div className='login-main'>
            {/* <div className="login-header">
                <img src={bfilogo} alt="bfi-logo-img" className="bfi-login-icon" />
            </div> */}
            <div className='login-body'>
                <div className='login-card'>
                    <img src={bfilogo} alt="bfi-logo-img" className="bfi-login-icon" />
                    <h3>User Login</h3>
                    <div className='login-form'>
                        <div className='login-form-username'>
                            <input type='text' placeholder='User ID' onChange={onChange} name='userid' />
                            <img src={userIcon} alt="bfi-logo-img" className="username-icon"/>
                        </div>
                        <div className='login-form-username'>
                            <input type={visible? 'text':'password'} placeholder='password' name='password' onChange={onChange}/>
                            <img src={pass} alt="bfi-logo-img" className="password-icon" onClick={()=>setVisible(!visible)}/>
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