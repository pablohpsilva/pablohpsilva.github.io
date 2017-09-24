import React from 'react'
import './navbar.scss'

const Navbar = ({ children }) => (
  <nav className="app-header navbar-wrapper">
    {children}
  </nav>
)

export default Navbar
