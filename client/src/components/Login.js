import React, { useState } from 'react'
import './style1.css'

function Login(props) {
    return (
        <div className="body-full">
            <h1 className="Greeting bolder">Hey Welcome Back 💙</h1>
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form className="form" action="#">
                        <h2>Sign in</h2>
                        <input className="input" type="email" placeholder="Email" required />
                        <input className="input" id="pass" type="password" placeholder="Password" required />
                        <button className="button-auth">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h3 className="mb-5">Don't have an account ?</h3>
                            <a href='/register/'><button className="ghost button-auth" id="signUp">  Sign Up</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login
