import { NavLink } from "react-router-dom"
import "../Sidebar/Sidebar.css"
import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
          <NavLink to='/dashboard' activeclassname='active'>Dashboard</NavLink>
          <NavLink to='/bri'>BRI</NavLink>
          <NavLink to='/biome'>BIOME</NavLink>
          <NavLink to='/org'>ORG</NavLink>
          <NavLink to='/dfs'>DFS</NavLink>
      </div>
    </div>
  )
}
