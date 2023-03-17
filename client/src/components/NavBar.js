import React from "react"
import MarkerMeanings from "./MarkerMeanings"
import ReviewForm from "./ReviewForm"
import MiniNav from "./MiniNav"
 import LocationReviewList from "./LocationReviewList"

function NavBar({onLogout}) {

return (
    <div className="nav-bar">
        <MiniNav onLogout={onLogout}/>
        <h2>Nav Bar</h2>
        <MarkerMeanings/>
        <LocationReviewList/>
        <ReviewForm/>
    </div>
)
}

export default NavBar
