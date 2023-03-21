 import React, {useState} from "react"
 import {Button} from "@material-ui/core"


 import Comment from "./Comment"

function CommentSection({currentUser, comments, reviewId, addComment}) {
    const [comment, setComment] = useState("")

    const commentMap = comments.map(comment => {
       return <Comment
         id={comment.id}
         commenter={comment.user.username}
         comment={comment.content}
         key={comment.id}
        />
    })
    console.log("line 18: ", user)

   function handleCommentSubmit(e) {
    e.preventDefault()


    fetch(`/review/${reviewId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({content: comment, review_id: reviewId, user_id: currentUser.id})
    })
    .then(res => res.json())
    .then(addComment)
   }

 return (
    <div className="comment-section">
            {commentMap}
            <div className="comment-form">
                <form onSubmit={handleCommentSubmit}>
                    <input
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add comment..."
                    />
                    <Button type="submit">Leave Comment</Button>
                </form>
            </div>
    </div>
 )
}

export default CommentSection
