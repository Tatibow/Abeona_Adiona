 import React, {useEffect, useState} from "react"
 import CommentSection from "./CommentSection"
 import FavoriteIcon from '@material-ui/icons/Favorite';
//  import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
 import CommentIcon from '@material-ui/icons/Comment';

function LocationReview ({id, placeName, experience, recommendations, safeness, reviewLikes, reviewer, reviewLocation, currentUser, addLikes, review/*comments*/}) {
     const [likes, setLikes] = useState(reviewLikes)
    const [commentSectionToggle, setCommentSectionToggle] = useState(false)
    const [userComments, setUserComments] = useState([])

    // useEffect(() => {
    //     setUserComments(comments)
    // }, [comments])


      useEffect(() => {
        //  setInterval(() => {
          fetch(`/reviews/${id}/comments`)
          .then(res => res.json())
          .then(commentData => setUserComments(commentData))
        //  },2000)
      }, [id])

    const addComment = (newComment) => {
        const commentData = [...userComments, newComment]
        setUserComments(commentData)
    }

     function handleCommentSectionToggle() {
        setCommentSectionToggle(!commentSectionToggle)
     }

     const onDelete = (id) => {
       let deletion = userComments.filter(comment => {
         return comment.id !== id
       })
        fetch(`/comments/${id}`, {
           method: "DELETE",
           headers: {
            "Content-Type": "application/json"
           }
        })
        .then(res => res.json())
        .then(setUserComments(deletion))
     }


    function handleLikes() {
        setLikes(likes + 1)


        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({review_likes: likes + 1})
        })
        .then(res => res.json())
        .then(addLikes)
    }

    const unknownPerson = "https://i.postimg.cc/tT1wHRYc/Unknown-person.jpg"

 return  (
    <div className="review">
      <p><img src={review.user.profile_img} alt={unknownPerson} className="review-pic"/>{reviewer}</p>
        <h4>{placeName}</h4> <p>{safeness}</p>
        <p>{reviewLocation}</p>
        <div>
        <p>{experience}</p>
        </div>
        <div>
        <p>{recommendations}</p>
        </div>
      <button onClick={handleLikes}><FavoriteIcon/></button>
     <p>{likes}</p>
      <button onClick={handleCommentSectionToggle}><CommentIcon/></button>
      {commentSectionToggle ? <CommentSection reviewId={id} currentUser={currentUser} comments={userComments} addComment={addComment} onDelete={onDelete}/>  : null}
    </div>
 )
}

export default LocationReview
