import { React, useState, useEffect } from 'react'

function Navbar(props) {
    let loginlink = ""
    return (
        <div className="center">
            <div className="Navbar">
            <div className="navbar__logo">
                    <h1 className="text-light"><a href="/dashboard"><span>Quiz World!</span></a></h1>
                </div>

                <div className="nav__menu">
                    <a className="text__capitalize navbar__link" href="/dashboard">dashboard</a>
                    <button className="text__capitalize btn btn-success" onClick={async () => {
                        let done = false
                        try {
                            const response = await fetch('http://127.0.0.1:1221/logout');
                            const result = await response.json()
                            console.log(result);
                        } catch (err) {
                            done = true
                        }

                        if (done === true) {
                            window.location.assign('/')
                        }
                        else {
                            console.log('Error Occured');
                        }
                    }}>logout</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar
