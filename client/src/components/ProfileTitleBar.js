import React  from "react"
import { Link } from 'react-router-dom';
// import Button from "@material-ui/core"

function ProfileTitleBar({userData, amountOfReviews, totalSumLikes}) {

return (
    <div className="title-bar" id="spaceDefault">
    <h2>{userData.username}'s Profile</h2>
    <h4>You have: {amountOfReviews} reviews & {totalSumLikes} likes</h4>
    <Link to="/home"><button variant="contained">back home</button></Link>
    </div>
)
}

export default ProfileTitleBar
