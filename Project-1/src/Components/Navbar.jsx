import React from 'react'

export default function Navbar() {
  return (
    <div className="main">
    <div className="logo">
      <img src="https://themeholy.com/html/frutin/assets/img/logo.svg" alt="" />
    </div>
    <div className="div1">
      <a href="">HOME</a>
      <a href="">ABOUT US</a>
      <a href="">SERVICE</a>
      <a href="">PAGES</a>
      <a href="">BLOG</a>
      <a href="">CONTACT</a>
    </div>
    <div className="icn">
    <i class="fa-solid fa-magnifying-glass"></i>
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    </div>
  </div>
  )
}
