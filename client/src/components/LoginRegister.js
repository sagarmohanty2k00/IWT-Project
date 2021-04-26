import React, { useState } from 'react'

function LoginRegister(props) {
    const [st, setSt] = useState('login')
    // let messages = []

    if (st === 'login') {
        return (
            <div className="body">
                <h1 className="Greeting">Hey Welcome Back 💙</h1>
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form className="form" action="#">
                            <h2>Sign in</h2>
                            <input className="input" type="email" placeholder="Email" required />
                            <input className="input" id="pass" type="password" placeholder="Password" required />
                            <button className="button">Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h3>Don't have an account ?</h3>
                                <button className="ghost button" id="signUp" onClick={() => {
                                    setSt('siginup');
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="body">
            <h1 className="Greeting">Hey There 👋 Create Your Account</h1>
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form className="form" action="#">
                        <h2 className="mb-1">Create Account</h2>
                        <input className="input" type="text" placeholder="Name" required />
                        <input className="input" type="email" placeholder="Email" required />
                        <input className="input" type="password" placeholder="Password" required />
                        <input className="input" type="password" placeholder=" Confirm Password" required />
                        <button className="mt-5 button">Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h3>Already have an account</h3>
                            <button className="ghost button" id="signUp" onClick={() => {
                                setSt('login');
                            }}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister
