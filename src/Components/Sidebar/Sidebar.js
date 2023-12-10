import { NavLink } from "react-router-dom"
import "../Sidebar/Sidebar.css"
import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
          <NavLink to='/' activeclassname='active'>Dashboard</NavLink>
          <NavLink to='/bri'>BRI</NavLink>
          <NavLink to='/biome'>BIOME</NavLink>
          <NavLink to='/orgf'>ORG</NavLink>
          <NavLink to='/dfs'>DFS</NavLink>
      </div>
    </div>
  )
}
