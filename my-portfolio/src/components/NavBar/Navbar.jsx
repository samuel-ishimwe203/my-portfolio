import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import mobile from '../../assets/mobile.png'
import {Link} from 'react-scroll'

function Navbar() {
  return (
        <nav className="navBar">

           <img src={logo} alt="Samuel Ishimwe Logo" className='logo' />


            <div className="navigations">

                <Link className="HomeMenu" >Home</Link>
                <Link className="HomeMenu" >About</Link>
                <Link className="HomeMenu" >portfolio</Link>
                <Link className="HomeMenu" >Technologies</Link>

            </div>

            <button className="btnMenu"> 
                <img src={mobile} alt="" className='btnImag' />contact me</button>

        </nav>
  )
}

export default Navbar