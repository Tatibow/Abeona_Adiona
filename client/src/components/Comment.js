 import React, {useState} from "react"
 import DeleteIcon from '@material-ui/icons/Delete'
 import FavoriteIcon from '@material-ui/icons/Favorite';

function Comment({comment, id, onDelete, commentLikes, addCommentLikes}) {
  const [likes, setLikes] =useState(commentLikes)

  function handleDelete() {
   onDelete(id)
  }

  function handleCommentLikes() {
     setLikes(likes + 1)

     fetch(`/comments/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({comment_likes: likes + 1})
     })
     .then(res => res.json())
     .then(addCommentLikes)
  }
 return (
    <div className="comment">
      <p>{comment}</p>
      <FavoriteIcon onClick={handleCommentLikes}/>{likes}
      <DeleteIcon onClick={handleDelete}/>
    </div>
 )
}

export default Comment
