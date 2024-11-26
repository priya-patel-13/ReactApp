import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
     <center> <h1>My Resume.</h1></center>
      <div className="container-1">
        <div className="section">
          {/* <h2>Persnol Details</h2> */}
          <div className="timeline">
            <div className="timeline-item">
              <h3>CONTACT</h3>
              <h4>   
              <i class="fa-solid fa-mobile-screen"></i>&nbsp;&nbsp;
                 <span>+91 99745 82719</span>
              </h4>
              <h4>
               <i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;
                 <span>ppiyu4487@gmail.com</span>
                 </h4>
              <h4>
               <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;
                 <span>Rajkot-Gujrat-India</span></h4>
                 <span className="line">-  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>
            </div>

          
             
            <div className="timeline-item">
              <h3>Soft  - skills</h3>
            <h4>
                <li>
                <span>Time Managment</span>
                </li>
                </h4>
                
             <h4>
                <li>
                <span>Work Flow Managment </span>

                </li>
                </h4>
           <h4>
            <li>
            <span>Reletionship Managment </span>
            </li>
            </h4>
           <h4>
            <li>
            <span>Critical Managment </span>

            </li>
            </h4>
            <span className="line">-  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>

          </div>

            <div className="timeline-item">
              <h3>Education</h3>
              <p>Saurashtra University</p>
              <h4> 
                <li>
                <span>Bechelor of Computer Application (BCA) <br /><h6>2023 - 2024</h6></span>
                </li>  
              </h4>
              <p>H.S.C. (Commerce)</p>
              <h4> 
                <li>
                <span>P & B Oriental School , Rajkot <br /><h6>2022 - 2023</h6> </span>
                </li>  <br />
                <li>
                    <span>Percentage - 98 PR</span>
                </li>
              </h4>
             
                 <span className="line">-  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>
            </div>

          
        </div>
       </div>
        <div className="section">
          <div className="timeline">
            <div className="timeline-item">
              <h3>Language</h3>
              <h4> 
                <li>
                <span>English</span>
                </li>  <br />
                <li>
                <span>Hindi</span>
                </li>  <br />
                <li>
                <span> Gujarati</span>
                </li>  <br /><br />
                <span className="line2">- - - - - - - - - - - - - - - - - - - - - -  - - - - - - - -</span>
              </h4>
            </div>

            <div className="timeline-item">
              <h3>Skills in computer </h3>
              <h4> 
                <li>
                <span>HTML</span>
                </li>  <br />
                <li>
                <span>CSS</span>
                </li>  <br />
                <li>
                <span>BootStarp</span>
                </li>  <br />
                <li>
                <span>JQuery</span>
                </li>  <br />
                <li>
                <span>C - Language</span>
                </li>  <br />
                <li>
                <span>JavaScript</span>
                </li>  <br />
                <li>
                <span>React App</span>
                </li>  <br /><br />
                <span className="line2">- - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - -</span>
              </h4>
            </div>
            <div className="timeline-item">
              <h3>profile</h3>
              <h4> 
                <li>
                <span>I am a full stack development student. <br /><br /> &nbsp;&nbsp;  In Red and White Multimedia Education.</span>
                </li> <br /><br />
                <span className="line2">- - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - -</span>
              </h4>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Resume;
