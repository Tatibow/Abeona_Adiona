 import React, {useState} from "react"
 import {Button, Input} from "@material-ui/core"


 import Comment from "./Comment"


function CommentSection({comments, reviewId, addComment, onDelete, addCommentLikes}) {
    const [comment, setComment] = useState("")

    const commentMap = comments.map(comment => {
       return <Comment
         id={comment.id}
         comment={comment.content}
         commentLikes={comment.comment_likes}
         onDelete={onDelete}
         addCommentLikes={addCommentLikes}
         key={comment.id}
        />
    })


   function handleCommentSubmit(e) {
    e.preventDefault()


    fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({content: comment, review_id: reviewId})
    })
    .then(res => res.json())
    .then(addComment)
    setComment("")
   }

 return (
    <div className="comment-section">
            {commentMap}
            <div className="comment-form">
                <form onSubmit={handleCommentSubmit}>
                    <Input
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="comment..."
                    />
                    <Button type="submit">Leave Comment</Button>
                </form>
            </div>
    </div>
 )
}

export default CommentSection
