import React from "react"
import { Link } from 'react-router-dom';

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
    <h2>Mini Nav</h2>
     <Link to="/profile"><button>My Profile</button></Link><br/>
    <Link to="/login" onClick={handleLogoutClick}>
        <button >Log out</button>
      </Link>
   </div>
)
}

export default MiniNav
