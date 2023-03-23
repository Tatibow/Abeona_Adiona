import React from "react"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"
function WelcomePage() {
    return (
        <div className="welcome-page">
        <h1>Hello, welcome to Abeona/Adiona!</h1>
        <h3>Our mission is to help  POC, women, and LGBTQ+ commuity feel and stay safe while traveling!</h3>
        <p>
        Why Abeona Adiona? Abeona and Adiona are both roman dieties who ensure the safe passage of travelers! Abeona is the goddess of outward journeys, watching over those who set out on their adventure. And Adiona is the goddess of safe returns, protecting travelers as they make their way back home. So both work in tandem!
        </p>

        <div>
        <Link to="/login"><Button variant="contained">Go to Login </Button></Link>
        </div>
        </div>
    )
}

export default WelcomePage
