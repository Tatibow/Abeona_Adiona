import React from "react"
import {Link} from "react-router-dom"
function WelcomePage() {
    return (
        <div className="welcome-page">
        <h1>Welcome to Abeona Adiona!</h1>
        <h2>The saftey travel app for POC, women, and LGBTQ+</h2>

        <div>
        <Link to="/login"><button>Go to Login </button></Link>
        </div>
        </div>
    )
}

export default WelcomePage
