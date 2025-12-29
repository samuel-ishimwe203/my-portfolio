import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

function Navbar() {
  return (
        <nav className="navBar">

           <img src={logo} alt="Samuel Ishimwe Logo" className='logo' />


            <div className="navigations">

                <Link className="HomeMenu" >Home</Link>
                <Link className="aboutMenu" >About</Link>
                <Link className="folioMenu" >portfolio</Link>
                <Link className="clientsMenu" >clients</Link>

            </div>

            <button className="btnMenu"> contact me</button>

        </nav>
  )
}

export default Navbar