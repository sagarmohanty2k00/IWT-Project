import { React, Fragment } from 'react'
import './style_1.css'
function Navbar(props) {
    let loginbutton = "Login"
    let loginlink = ""
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container-fluid d-flex navbar__nav">

                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="index.html"><span>QuizSense!</span></a></h1>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#profile">Profile</a></li>

                        <li className="get-started"><a href={loginlink}>{loginbutton}</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Navbar
