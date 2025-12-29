import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
        <nav className="navBar">

            <img src={logo} alt="logo" className='logo' />

            <div className="navigations">

            </div>

            <button className="btnMenu">

            </button>

        </nav>
  )
}

export default Navbar