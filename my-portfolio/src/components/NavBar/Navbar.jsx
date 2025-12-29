import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

function Navbar() {
  return (
        <nav className="navBar">

            <img src={logo} alt="logo" className='logo' />

            <div className="navigations">

                <link className="HomeMenu" >Home</link>
                <link className="HomeMenu" >About</link>
                <link className="HomeMenu" >portfolio</link>
                <link className="HomeMenu" >clients</link>

            </div>

            <button className="btnMenu">

            </button>

        </nav>
  )
}

export default Navbar