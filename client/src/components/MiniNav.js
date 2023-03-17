import React from "react"
import { Link } from 'react-router-dom';
import {Button} from "@material-ui/core"

function MiniNav({onLogout}) {

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(res =>  {
           if(res.ok) {
            onLogout(null);
           }
        })
    }

return (
    <div className="mini-nav">
     <Link to="/profile"><Button id="spaceDefault" variant="contained">My Profile</Button></Link><br/>
    <Link to="/login" onClick={handleLogoutClick}>
        <Button variant="contained">Log out</Button>
      </Link>
   </div>
)
}

export default MiniNav
