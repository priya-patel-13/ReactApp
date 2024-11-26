import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="profile-section">
        <img src="" alt="" className="profile-pic"/>
        <h3 className='name'>Priya Lakkad</h3>
        <p className='p1'>Full-Stack Developer</p>
      </div>
      <ul className="nav-links">
        <li>
        <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/">Home</Link></li>
        <li>
        <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
          <Link to="/about">About Me</Link></li>
        <li>
        <i class="fa-solid fa-id-card"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/resume">Resume</Link></li>
        <li>
        <i class="fa-solid fa-briefcase"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/portfolio">Portfolio</Link></li>
        <li>
        <i class="fa-solid fa-book"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/blog">Blog</Link></li>
        <li>
        <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/contact">Contact</Link></li>
      </ul>
     <br /><br /><br /><br /><br />
     <div className="footer">
      <div className="icon">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-dribbble"></i>
      <i class="fa-brands fa-square-behance"></i>
      </div><br />
      <div className="con">
        <p>2024 © Cosmos-Themes.
        All Right Reserved.</p>
      </div>
     </div>
    </div>
   
  );
};

export default Navbar;
