import React  from "react"
import { Link } from 'react-router-dom';
import ProfileEditor from "./ProfileEditor"
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
// import Button from "@material-ui/core"

function ProfileTitleBar({userData, amountOfReviews, totalSumLikes, handleProfEditTog, setProfEditTog, updateAccount, profEditTog}) {
 const unknownPerson = "https://i.postimg.cc/tT1wHRYc/Unknown-person.jpg"


return (
    <div className="title-bar" id="spaceDefault">
  <h2> <img src={userData.profile_img} alt={unknownPerson} className="profile-pic"/>{userData.username}'s Profile</h2>
    <h4>You have: {amountOfReviews} reviews & {totalSumLikes} likes</h4>
    <button onClick={handleProfEditTog}><EditIcon/>edit profile</button> <Link to="/home"><button variant="contained"><HomeIcon/>back home</button></Link>
    <div>
        {profEditTog ? <ProfileEditor userData={userData} updateAccount={updateAccount} setProfEditTog={setProfEditTog} /> : null}
    </div>
    </div>
)
}

export default ProfileTitleBar
