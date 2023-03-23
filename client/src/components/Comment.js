 import React from "react"
 import DeleteIcon from '@material-ui/icons/Delete'
 import {Input} from "@material-ui/core"


function Comment({comment, id, onDelete}) {

  function handleDelete() {
   onDelete(id)
  }
 return (
    <div className="comment">
      <p>{comment}<DeleteIcon onClick={handleDelete}/></p>
    </div>
 )
}

export default Comment
