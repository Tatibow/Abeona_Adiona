import React, {useState} from "react"
import DeleteIcon from '@material-ui/icons/Delete'
 import EditIcon from '@material-ui/icons/Edit'
 import ReviewEditForm from "./ReviewEditForm"

function ProfileReview({id, placeName, experience, recommendations, safeness, reviewLikes, reviewer, deleteMyReview, onEditReview, dateStamp}) {
const [editFormToggle, setEditFormToggle] = useState(false)

const handleDelete = () => {
        deleteMyReview(id)
    }

 function handleEditFormToggle() {
    setEditFormToggle(!editFormToggle)
 }

//  console.log("line 17 | date stamp: ", dateStamp.split("T")[0].split("-")[2])

  return (
<div className="profile-review">
        <p className="review-heading">{reviewer}</p>
        <p>{dateStamp.split("T")[0]}</p>
   <p><i><u>place/establishment name:</u></i></p>
        <h4>{placeName}</h4>
        <p><i><u>safeness:</u></i></p>
        <p>{safeness}</p>
        {/* <p>{reviewLocation}</p> */}
          <p><i><u>my experience:</u></i></p>
        <div>
        <p>{experience}</p>
        </div>
         <p><i><u>any recommendations?:</u></i></p>
        <div>
        <p>{recommendations}</p>
        <p>this review got: {reviewLikes} likes</p>
        </div>
      <DeleteIcon onClick={handleDelete}/> <EditIcon onClick={handleEditFormToggle}/>
     { editFormToggle ? <div className="review-edit-form">
         <ReviewEditForm placeName={placeName} experience={experience} recommendations={recommendations} safeness={safeness} userReviewId={id}  onEditReview={onEditReview} setEditFormToggle={setEditFormToggle}/>
      </div> : null }
    </div>
 )

}

export default ProfileReview
