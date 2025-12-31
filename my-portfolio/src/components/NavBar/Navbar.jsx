import React, { use } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import mobile from '../../assets/mobile.png'
import {Link} from 'react-scroll'
import { useState } from 'react'
import menu from '../../assets/menu.png'

function Navbar() {

  const [showMenu,setShowMenu]=useState(false);
  return (
        <nav className="navBar">

           <img src={logo} alt="Samuel Ishimwe Logo" className='logo' />


            <div className="navigations">

                <Link activeClass='active' to='introduction' spy={true} smooth={true} offset={-50} duration={500} className="HomeMenu">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="HomeMenu" >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="HomeMenu">portfolio</Link>
                <Link activeClass='active' to='technologies' spy={true} smooth={true} offset={-50} duration={500}  className="HomeMenu" >Technologies</Link>

            </div>

            <button className="btnMenu" onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}> 
                <img src={mobile} alt="" className='btnImag' />contact me</button>

                
           <img src={menu} alt="Menu" className='imMenu'onClick={()=>setShowMenu(!showMenu)} />


            <div className="mobMenu" style={{display:showMenu?'flex':'none'}}>

                <Link activeClass='active' to='introduction' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)} >portfolio</Link>
                <Link activeClass='active' to='technologies' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Technologies</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)} >contact</Link>

            </div>

        </nav>
  )
}

export default Navbar