import React from 'react'
import './work.css'
import img1 from '../../../assets/image1.png'
import img2 from '../../../assets/image2.png'
import img3 from '../../../assets/image3.png'
import img4 from '../../../assets/image4.png'
import img5 from '../../../assets/image5.png'
import img6 from '../../../assets/web.png'


function work() {
  return (
  <section id="works">

      <h2 className="worksTitle">My portfolio</h2>
      <span className="workDesc">I focus on building clean, modern, and functional web applications with attention to detail and performance. My work combines good design, user experience, and solid development practices to create reliable digital solutions for real-world problems.</span>
      <div className="workImgs">
         <img src={img1} alt="" className="worksimg" />
          <img src={img2} alt="" className="worksimg" />
           <img src={img3} alt="" className="worksimg" />
            <img src={img4} alt="" className="worksimg" />
             <img src={img5 } alt="" className="worksimg" />
              <img src={img6} alt="" className="worksimg" />
      </div>
  </section>
  )
}

export default work;