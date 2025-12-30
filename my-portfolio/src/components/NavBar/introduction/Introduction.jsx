import React from 'react'
import './Introduction.css'
import {Link} from 'react-scroll'
import cas from '../../../assets/case.png'
import profile from '../../../assets/sam.png'

function Introduction() {
  return ( 
     <section id="introduction">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">I'm <span className="introname ">Ishimwe</span> <br />Web application developer  </span>
          <p className="introprag">I am a skilled in software development with experience in creating <br /> visually appealing and user friendly websites </p>
         <Link><button className="btn"><img src={cas} alt="Hire me" className='btimg' />Hire me </button></Link>
        </div>
         
       <img src={profile} alt="profile"  className='profile'/>
     </section>
  )
}

export default Introduction