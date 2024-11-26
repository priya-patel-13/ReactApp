import React from 'react';
import './About.css';

const About =() => {
  return (
    <div className="about-section">
      <div className="about-left">
        <h2>About Me.</h2>
        <h3>Full-Stack Developer</h3>
        <p>
        A full-stack developer is a programmer who designs and builds websites and applications for various platforms. They work on both the front-end and back-end of web applications, and their responsibilities include:        </p>
        <p>
            <li>Front-end development: Creating the user experience and front-end of websites and applications</li><br />
            <li>Back-end development: Ensuring that the server side of websites and applications works smoothly</li><br />
            <li>Database development: Creating servers and databases to support the back-end of the software</li><br />
        </p>
        <img src="/signature.png" alt="Signature" className="signature" />
      </div>

      <div className="about-right">
        <h3>Personal Information</h3>
        <ul>
          <li><strong> <u className='u'>Name</u> :</strong> <a href="#">Priya Lakkad</a></li>
          <li><strong><u className='u'>Age </u>:</strong> 20 Years</li>
          <li><strong><u className='u'>Residence</u> :</strong> Rajkot ,  India</li>
          <li><strong><u className='u'>Address</u> :</strong>Mavadi , Rajkot</li>
          <li><strong><u className='u'>Email</u> :</strong> <a href="mailto:example@example.com">ppiyu4487@gmail.com</a></li>
          <li><strong><u className='u'>Phone</u> :</strong> (+91) 99745 82719</li>
          <li><strong><u className='u'>Freelance</u> :</strong> Available</li>
        </ul>
        <button className="download-btn">Download Resume</button>
    
      
      <div className="main-section">

     <section className="services-section">
  <h2>SERVICES</h2>
  <div className="services-container">
    <div className="service-item">
    <i class="fa-solid fa-laptop"></i>
          <h3>Web Development</h3>
      <p>Amet aspernatur delectus maxime ducimus similique ratione asperiores corporis.</p>
    </div>
    <div className="service-item">
    <i class="fa-regular fa-eye"></i>
          <h3>Web Design</h3>
      <p>Amet aspernatur delectus maxime ducimus similique ratione asperiores corporis.</p>
    </div>
    <div className="service-item">
    <i class="fa-solid fa-mobile-screen"></i>
          <h3>Responsive Design</h3>
      <p>Amet aspernatur delectus maxime ducimus similique ratione asperiores corporis.</p>
    </div>
    <div className="service-item">
    <i class="fa-solid fa-camera-retro"></i>
          <h3>Photography</h3>
      <p>Amet aspernatur delectus maxime ducimus similique ratione asperiores corporis.</p>
    </div>
  </div>
</section>

</div>
    </div>
    </div>
    
  );
}

export default About;















// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-page">
//       <div className="about-container">
//         <h2>About Me.</h2>
//         <h3>Developer</h3>
//         <p>
//         A full-stack developer is a programmer who designs and builds websites and applications for various platforms. They work on both the front-end and back-end of web applications, and their responsibilities include:        </p>
//         <p>
//           Consequuntur consectetur nescient nescuint blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo
//           architecto aliquam velit illo magnam neque preferendis sint. Incident eius ipsa inventore labore eos velit.
//         </p>
//         <div className="signature">
//           <img src="signature-url" alt="Signature" />
//         </div>
        
//         <div className="personal-info">
//           <h4>Personal Information</h4>
//           <ul>
//             <li><strong>Name:</strong> Priya Lakkad</li>
//             <li><strong>Age:</strong> 20 Years</li>
//             <li><strong>Residence:</strong> Rajkot , India</li>
//             <li><strong>Address:</strong> Mavadi</li>
//             <li><strong>Email:</strong> priyapatel123@gmail.com</li>
//             <li><strong>Phone:</strong> (+91) 99745 82719</li>
//             <li><strong>Freelance:</strong> Available</li>
//           </ul>
//           <button className="download-resume">Download Resume</button>
//         </div>
//       </div>

//       <div className="services">
//         <h4>Services</h4>
//         <div className="service-list">
//           <div className="service-item">
//             <i className="fas fa-code"></i>
//             <h5>Web Development</h5>
//           </div>
//           <div className="service-item">
//             <i className="fas fa-eye"></i>
//             <h5>Web Design</h5>
//           </div>
//           <div className="service-item">
//             <i className="fas fa-mobile-alt"></i>
//             <h5>Responsive Design</h5>
//           </div>
//           <div className="service-item">
//             <i className="fas fa-camera"></i>
//             <h5>Photography</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
