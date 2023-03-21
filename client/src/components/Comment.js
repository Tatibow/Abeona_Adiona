 import React from "react"
 import DeleteIcon from '@material-ui/icons/Delete'   


function Comment({commenter, comment}) {

 return (
    <div className="comment">
      <p>{commenter}</p>
      <p>{comment}</p>
    </div>
 )
}

export default Comment
