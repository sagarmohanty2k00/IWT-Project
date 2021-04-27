import { React, useState, useEffect } from 'react'

function Navbar(props) {
    let loginlink = ""
    return (
        <div className="center">
            <div className="Navbar">
            <div className="navbar__logo">
                    <h1 className="text-light"><a href="/"><span>Quiz World!</span></a></h1>
                </div>

                <div className="nav__menu">
                    <a className="text__capitalize navbar__link" href="/">dashboard</a>
                    <a className="text__capitalize navbar__link" href="/profile">profile</a>
                    <a className="text__capitalize navbar__link" href="/add-quiz">add quiz</a>
                    <a className="text__capitalize btn btn-success" href="/logout">logout</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar
