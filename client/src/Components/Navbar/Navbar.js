import "../Navbar/Navbar.css"
import React from 'react'
import bfilogo from "../../Assets/images/bfilogo.png"
import { SearchOutlined, BellOutlined, DownOutlined, PlusCircleOutlined } from '@ant-design/icons';
import user from "../../Assets/images/user.png"
import downarrow from "../../Assets/images/downarrow.png"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="logo">
        <img src={bfilogo} alt="bfi-logo-img" className="bfi-icon" />
      </div>
      <div className="menu">
        <div className="searchbar">
          <input type="text" placeholder="Search anything..." />
          <SearchOutlined className="searchicon" />
        </div>
        <div className="icons">
          <PlusCircleOutlined className="bellicon" onClick={()=>navigate('/add')} style={{cursor: 'pointer'}}/>
          <BellOutlined className="bellicon" />
        </div>
        <div className="user">
          <img src={user} alt="user-logo" className="userimg" />
          <img src={downarrow} alt="bfi-logo-img" className="downicon" />

        </div>

      </div>
    </div>
  )
}
