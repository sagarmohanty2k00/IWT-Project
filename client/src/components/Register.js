import React, { useState } from 'react'

function Register(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const validate = () => {
        alert('Heloo')
    }

    const register_user = async () => {
        let done = true;
        try {
            const body = { name, email, password1 }
            const res = await fetch('http://127.0.0.1:1234/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: await JSON.stringify({
                    "name": name,
                    "email": email,
                    "password": password1
                    })
            });
        } catch (err) {
            console.log(err.message);
            done = false
        }

        if (done == true) {
            window.location.assign('/login')
        }
        else {
            alert(done)
        }                
    }

    const submit = event =>  {
        event.preventDefault()
        register_user()
    }
    
    return (
        <div className="body-full">
            <h1 className="Greeting bolder">Hey There 👋 Create Your Account</h1>
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form className="form" onSubmit={submit}>
                        <h2 className="mb-1">Create Account</h2>
                        <input className="input" type="text" placeholder="Name" id="name" required onChange={e => setName(e.target.value)} />
                        <input className="input" type="email" placeholder="Email" id="email" required onChange={e => setEmail(e.target.value)} />
                        <input className="input" id="pass1" type="password" placeholder="Password" required onChange={e => setPassword1(e.target.value)} />
                        <input className="input" type="password" placeholder=" Confirm Password" id="pass2" required onChange={e => setPassword2(e.target.value)} />
                        <button className="mt-5 button-auth" type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h3 className="mb-5">Already have an account</h3>
                            <a href='/login'><button type="submit" className="ghost button-auth" id="signUp" >Sign In</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register
