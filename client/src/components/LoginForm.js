import React, { useState } from "react"
import { Link } from 'react-router-dom';
import {Button} from "@material-ui/core"

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [errors, setErrors] = useState([])

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(loggedInUser => {
                onLogin(loggedInUser);
                window.location.href = '/home'
                setUsername("");
                setPassword("");
            });

    }

    return (
        <div className="login-form">
            <h4>Login and If you don't already have an account click the create account button!</h4>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <p>Username</p>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        value={username}
                        onChange={handleUsername}

                    />

                     <p>Password</p>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onChange={handlePassword}
                        className="spaceDefault"
                    /><br/>
                    <Button type="submit" variant="contained">Log In</Button>
                </form>
                <br />
                <div>
                <Link to='/signup'>Create account here!</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
