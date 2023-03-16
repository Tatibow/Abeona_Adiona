import React, {useState} from "react"
import {Link} from "react-router-dom"

function CreateAccountForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState()
    const [email, setEmail] = useState("")
    const [profileImg, setProfileImg] = useState("")

    function handleUsername(e) {
        setUsername(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleProfileImg(e) {
    setProfileImg(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        let accountCreationInput = {
            username: username,
            password: password,
            email: email,
            profile_img: profileImg
        }

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(accountCreationInput)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newUser => onLogin(newUser))
                window.location.href = '/home'
            }
        })
        setUsername("")
        setPassword("")
        setEmail("")
        setProfileImg("")
    }

return (
    <div className="create-account-form">
    <h2>Create Account</h2>
    <p>once account is created head back to login!</p>
         <div className="form">
             <form onSubmit={handleSubmit}>
                <p>Username</p>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    placeholder="enter username..."
                    onChange={handleUsername}
                />
                <p>Password</p>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    placeholder="enter password..."
                    onChange={handlePassword}
                />
                <p>Email</p>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    value={email}
                    placeholder="enter username..."
                    onChange={handleEmail}
                />
                <p>Profile Picture</p>
                <input
                    type="text"
                    id="profileImg"
                    autoComplete="off"
                    value={profileImg}
                    placeholder="profile picture"
                    onChange={handleProfileImg}
                />
            <button type="submit">Create Account</button>
            </form>
            <br/>
            <div>
            If you already have an account: <Link exact to='/login'>Back to login</Link>
            </div>
        </div>
        </div>
)
}

export default CreateAccountForm
