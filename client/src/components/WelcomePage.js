import React from "react"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"
function WelcomePage() {
    return (
        <div className="welcome-page">
        <h3>Hello, welcome to...</h3>
        <h1 className="header">Abeona/Adiona</h1>
        <h4>Our mission is to help  POC, women, and LGBTQ+ commuity feel and stay safe while traveling!</h4>
        <div>
        <Link to="/login"><Button variant="contained">Go to Login </Button></Link>
        </div>
        </div>
    )
}

export default WelcomePage
