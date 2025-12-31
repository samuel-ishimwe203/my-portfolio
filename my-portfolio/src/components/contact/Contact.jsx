import React from 'react'
import './contact.css'
import tech1 from '../../assets/HTML5.png'  
import tech2 from '../../assets/js.png'
import tech3 from '../../assets/react.png'
import tech4 from '../../assets/Express.png'
import tech5 from '../../assets/node.js.png'
import tech6 from '../../assets/PostgresSql.png'

import tech8 from '../../assets/ts.png'
import tech9 from '../../assets/Figma.png'
import tech10 from '../../assets/Git.png' 
import tech11 from '../../assets/gih.png' 

import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import whatsapp from '../../assets/whatsapp.png'

function Contact() {
  return (
      <section id="contactPage">
          <div id="technologies">
            <h2 className="technologyTitle">Technologies</h2>
             <p className="technologiesDesc">
                I use modern web technologies to design and develop responsive, scalable, and reliable applications. My work focuses on clean code, performance, and usability, combining frontend and backend tools to build practical digital solutions that solve real-world problems.
             </p>
             <div className="technologiesImg">
                <img src={tech1} alt="" className="techImg" />
                  <img src={tech2} alt="" className="techImg" />
                    <img src={tech3} alt="" className="techImg" />
                      <img src={tech4} alt="" className="techImg" />
                        <img src={tech5} alt="" className="techImg" />
                          <img src={tech6} alt="" className="techImg" />
                           
                              <img src={tech8} alt="" className="techImg" />
                                <img src={tech9} alt="" className="techImg" />
                                  <img src={tech10} alt="" className="techImg" />
                                    <img src={tech11} alt="" className="techImg" /> 
             </div>
          </div>
          <div id="contact">
            <h2 className="contactPageTitle">Contact Me</h2>
            <span className="contactDesc">please fill out the form below to discuss any work opportunities</span>
            <form action=""className='contactForm'>
                <input type="text" className="name" placeholder='Your name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea name="message" cols="30" rows="5" placeholder='Your Message' className='msg'></textarea>
                <button type="submit" value="send"className="submitBtn">submit</button>
                <div className="links">
                    <img src={whatsapp} alt="" className="link"/>
                    <img src={instagram} alt="" className="link" />
                    <img src={twitter} alt="" className="link" />
                    <img src={youtube} alt="" className="link" />
                    
                </div>

            </form>

          </div>
      </section>
  )
}

export default Contact