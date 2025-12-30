import React from 'react'
import './Skills.css'
import UIUX from '../../../assets/ui.png'
import WebDev from '../../../assets/web.png'
import AppDev from '../../../assets/system.png'

const Skills = () => {
  return (
   <section id="skills">
    <span className="skillTittle">
             About Section
    </span>
    <span className="skillsDesc">I am a passionate and motivated Web Developer and IT Specialist with experience in building modern, responsive, and user-friendly web applications. I work mainly with JavaScript technologies and focus on creating practical digital solutions that solve real-world problems. I enjoy learning new technologies and continuously improving my skills.</span>
    <div className="skillBars">
        <div className="skillBar"><img src={UIUX}alt="" />
        <div className="skillBarText">
            <h2>UI / UX Design</h2>
            <p>I design clean and simple user interfaces with a strong focus on usability and user experience. I create layouts that are easy to use, visually clear, and consistent across different devices, ensuring a smooth experience for users.</p>
        </div>
        
        </div>

         <div className="skillBar"><img src={WebDev} alt="" />
        <div className="skillBarText">
            <h2>Website Development</h2>
            <p>I develop responsive and dynamic websites using HTML, Tailwind CSS, JavaScript, React, Node.js, and Express. I focus on performance, clean code, and modern design to build professional websites for personal, business, and system use</p>
        </div>
        
        </div>

         <div className="skillBar"><img src={AppDev} alt="" />
        <div className="skillBarText">
            <h2>Web App & System Development</h2>
            <p>I build full-stack web applications and systems such as dashboards and management systems. I work with Node.js, Express, and PostgreSQL to create secure, scalable, and efficient applications with proper data handling and authentication.</p>
        </div>
        
        </div>

    </div>
   </section>   
  )
}

export default Skills