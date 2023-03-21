 import React, {useEffect, useState} from "react"
 import CommentSection from "./CommentSection"
 import FavoriteIcon from '@material-ui/icons/Favorite';
 import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
 import CommentIcon from '@material-ui/icons/Comment';

function LocationReview ({id, placeName, experience, recommendations, safeness, reviewLikes, reviewer, reviewLocation, currentUser, /*comments*/}) {
    const [likeButton, setLikeButton] = useState(false)
    const [likes, setLikes] = useState(reviewLikes)
    const [commentSectionToggle, setCommentSectionToggle] = useState(false)
    const [userComments, setUserComments] = useState([])

    // useEffect(() => {
    //     setUserComments(comments)
    // }, [comments])

      useEffect(() => {
        fetch(`/reviews/${id}/comments`)
        .then(res => res.json())
        .then(commentData => setUserComments(commentData))
      }, [])

    const addComment = (newComment) => {
        const commentData = [...userComments, newComment]
        setUserComments(commentData)
    }

     function handleCommentSectionToggle() {
        setCommentSectionToggle(!commentSectionToggle)
     }


    function handleLikeButton() {
        setLikeButton(!likeButton)

        if(likeButton === true) {
            setLikes(likes + 1)
        }

        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({review_likes: likes})
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }



 return  (
    <div className="review">
        <p>{reviewer}</p>
        <h4>{placeName}</h4> <p>{safeness}</p>
        <p>{reviewLocation}</p>
        <div>
        <p>{experience}</p>
        </div>
        <div>
        <p>{recommendations}</p>
        </div>
      {likeButton ? (
      <button onClick={handleLikeButton}><FavoriteIcon/></button>
      ) : (
        <button onClick={handleLikeButton}><FavoriteBorderIcon/></button>
      )}
     <p>{likes}</p>

      <button onClick={handleCommentSectionToggle}><CommentIcon/></button>
      {commentSectionToggle ? <CommentSection reviewId={id} currentUser={currentUser} comments={userComments} addComment={addComment}/>  : null}
    </div>
 )
}

export default LocationReview
