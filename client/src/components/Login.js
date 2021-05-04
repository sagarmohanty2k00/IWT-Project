import React, { useEffect, useState } from 'react'
import './style1.css'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = async () => {
        let done = true;
        try {
            const response = await fetch('http://127.0.0.1:1221/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: await JSON.stringify({
                "email": email,
                "password": password
                })
            })
            const result = await response.json()
            console.log(response);
        } catch (error) {
            done = false
        }
        
        if (done === true) {
            alert("Logged In")
            window.location.assign('/dashboard')
        }

        else {
            alert('Something went wrong')
        }
    }

    const submit = event =>  {
        event.preventDefault()
        login()
    }

    return (
        <div className="body-full">
            <h1 className="Greeting bolder">Hey Welcome Back 💙</h1>
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form className="form" onSubmit={submit}>
                        <h2>Sign in</h2>
                        <input className="input" type="email" placeholder="Email" value={email} required onChange={
                            e => setEmail(e.target.value)
                        } />
                        <input className="input" id="pass" type="password" placeholder="Password" value={password} required onChange={
                            e => setPassword(e.target.value)
                        } />
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
