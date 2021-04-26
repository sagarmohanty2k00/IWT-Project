import { React, useState, useEffect } from 'react'
import './style_1.css'
function Navbar(props) {
    let loginlink = ""
    return (
        <header id="header" className="fixed-top">
        <div className="container-fluid d-flex">
    
          <div className="logo mr-auto">
            <h1 className="text-light"><a href="index.html"><span>QuizSense!</span></a></h1>
          </div>
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li className="drop-down"><a href="">Category</a>
                <ul>
                  <li><a href="#">Aptitude</a></li>
                  <li><a href="#">Verbal</a></li>
                  <li><a href="#">Logical</a></li>
                </ul>
                </li>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#profile">Profile</a></li>
              <li className="get-started"><a href="#home">LOGIN</a></li>
            </ul>
          </nav>
    
        </div>
      </header>
)
}

export default Navbar
