import React from "react"
import { Link } from 'react-router-dom';

function ProfileTitleBar() {

return (
    <div className="title-bar">
    <h2>title bar</h2>
    <Link to="/home">back home</Link>
    </div>
)
}

export default ProfileTitleBar
