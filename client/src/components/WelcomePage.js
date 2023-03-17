import React from "react"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"
function WelcomePage() {
    return (
        <div className="welcome-page">
        <h1>Welcome to Abeona/Adiona!</h1>
        <h2>The saftey travel app for POC, women, and LGBTQ+</h2>

        <div>
        <Link to="/login"><Button variant="contained">Go to Login </Button></Link>
        </div>
        </div>
    )
}

export default WelcomePage
