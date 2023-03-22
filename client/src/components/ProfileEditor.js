// import React, {useState} from "react"
// import {Link} from "react-router-dom"
// import {Input, Button} from '@material-ui/core';


// function ProfileEditor({userData, updateAccount}) {
//     const [newUsername, setNewUsername] = useState(userData.username)
//     const [newPassword, setNewPassword] = useState(userData.password)
//     const [newEmail, setNewEmail] = useState(userData.email)
//     const [newProfileImg, setNewProfileImg] = useState(userData.profile_img)

//     function handleProfileUpdate(e) {
//         e.preventDefault()

//         const updatedUser = {
//             username: newUsername,
//             password: newPassword,
//             email: newEmail,
//             profile_img:newProfileImg
//         }

//         fetch(`/users/${userData.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updatedUser)
//         })
//         .then(res => res.json())
//         .then(updateAccount)
//         window.location.href = "/profile"
//     }

//  return (
//     <div className="profile-editor">
//       <form onSubmit={handleProfileUpdate}>
//         <Input
//         type="text"
//         name="newUsername"
//         value={newUsername}
//         onChange={(e) => setNewUsername(e.target.value)}
//         placeholder="new username..."
//         /> <br/>
//         <Input
//         type="password"
//         name="newPassword"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         placeholder="new password..."
//         /><br/>
//         <Input
//         type="text"
//         name="newEmail"
//         value={newEmail}
//         onChange={(e) => setNewEmail(e.target.value)}
//         placeholder="new email..."
//         /><br/>
//         <Input
//         type="text"
//         name="newProfileImg"
//         value={newProfileImg}
//         onChange={(e) => setNewProfileImg(e.target.value)}
//         placeholder="new profile picture..."
//         /><br/>
//         <Button type="submit">Update Profile</Button>
//       </form>
//     <Link to="/profile"><Button variant="contained">back to profile</Button></Link>
//     </div>
//  )
// }


// export default ProfileEditor
