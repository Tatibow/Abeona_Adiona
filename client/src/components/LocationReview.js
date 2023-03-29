 import React, {useEffect, useState} from "react"
 import CommentSection from "./CommentSection"
 import FavoriteIcon from '@material-ui/icons/Favorite';
//  import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
 import CommentIcon from '@material-ui/icons/Comment';

function LocationReview ({id, placeName, experience, recommendations, safeness, reviewLikes, reviewer, reviewLocation, currentUser, addLikes, review, dateStamp}) {
     const [likes, setLikes] = useState(reviewLikes)
    const [commentSectionToggle, setCommentSectionToggle] = useState(false)
    const [userComments, setUserComments] = useState([])

    // console.log("line 12 | date stamp: ", dateStamp.split("T")[0])

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

    const addCommentLikes = (newLikes) => {
       const withNewLikes = userComments.map(comment => comment.id === newLikes.id ? newLikes : comment)
       setUserComments(withNewLikes)
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
      <p className="review-heading"><img src={review.user.profile_img} alt={unknownPerson} className="review-pic"/>{reviewer}</p>
          <p>{dateStamp.split("T")[0]}</p>
          <p><i><u>place/establishment name:</u></i></p>
        <h4>{placeName}</h4>
        <p><i><u>safeness:</u></i></p>
         <p><strong>{safeness}</strong></p>
         <p><i><u>location/address:</u></i></p>
        <p>{reviewLocation}</p>
        <div>
        <p><i><u>my experience:</u></i></p>
        <p>{experience}</p>
        </div>
        <div>
        <p><i><u>any recommendations?:</u></i></p>
        <p>{recommendations}</p>
        </div>
      <button onClick={handleLikes}><FavoriteIcon/> {likes}</button>
     {/* <p>{likes}</p> */}
      <button onClick={handleCommentSectionToggle}><CommentIcon/></button>
      {commentSectionToggle ? <CommentSection reviewId={id} currentUser={currentUser} comments={userComments} addComment={addComment} onDelete={onDelete} addCommentLikes={addCommentLikes}/>  : null}
    </div>
 )
}

export default LocationReview
