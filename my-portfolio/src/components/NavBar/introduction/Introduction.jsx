import React from 'react'
import './Introduction'
import {Link} from 'react-scroll'
import cas from '../../../assets/case.png'

function Introduction() {
  return ( 
     <section id="introduction">
        <div className="introContent">
          <span className="hello"></span>
          <span className="introText">I'm <span className="introname "></span> <br />Web application developer  </span>
          <p className="introprag">I am a skilled in software development with experience in creating visually appealing and user friendly websites </p>
         <Link><button className="btn"><img src={cas} alt="Hire me " />Hire me </button></Link>
        </div>
         
       <img src=" " alt=""    className=''/>
     </section>
  )
}

export default Introduction