import "../Navbar/Navbar.css"
import React from 'react'
import bfilogo from "../../Assets/images/bfilogo.png"
import { SearchOutlined, BellOutlined, DownOutlined, PlusCircleOutlined } from '@ant-design/icons';
import user from "../../Assets/images/user.png"
import downarrow from "../../Assets/images/downarrow.png"
import { NavLink, useNavigate } from "react-router-dom"
import { Button, Dropdown, message } from 'antd';

export default function Navbar() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const error = (err) => {
    messageApi.open({
      type: 'error',
      content: err,
    });
  };
  const navigateToAdd = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/add')
    } else {
      error('Please login to add!')
    }

  }
  const logout = () => {
    localStorage.removeItem('isLoggedIn')
  }
  const gotToLogin = () => {
    navigate('/login')
  }
  const items = [
    {
      key: '1',
      danger: localStorage.getItem('isLoggedIn') ? true : false,
      label: (
        localStorage.getItem('isLoggedIn') ?
          <a onClick={logout} href="/">
            Logout
          </a>
          :
          <a onClick={gotToLogin} href="/login">
            Login
          </a>
      ),
    }
  ]
  return (
    <div className="navbar">
      {contextHolder}
      <div className="logo">
        <img src={bfilogo} alt="bfi-logo-img" className="bfi-icon" />
      </div>
      <div className="menu">
        <div className="searchbar">
          <input type="text" placeholder="Search anything..." />
          <SearchOutlined className="searchicon" />
        </div>
        <div className="icons">
          <PlusCircleOutlined className="bellicon" onClick={navigateToAdd} style={{ cursor: 'pointer' }} />
          <BellOutlined className="bellicon" />
        </div>
        <div className="user">
          <img src={user} alt="user-logo" className="userimg" />&nbsp;&nbsp;
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()} href="/">
              <DownOutlined />
            </a>
          </Dropdown>

        </div>

      </div>
    </div>
  )
}
