import React, {useState} from "react"
import DeleteIcon from '@material-ui/icons/Delete'
 import EditIcon from '@material-ui/icons/Edit'
 import ReviewEditForm from "./ReviewEditForm"

function ProfileReview({id, placeName, experience, recommendations, safeness, reviewLikes, reviewer, deleteMyReview, onEditReview}) {
const [editFormToggle, setEditFormToggle] = useState(false)

const handleDelete = () => {
        deleteMyReview(id)
    }

 function handleEditFormToggle() {
    setEditFormToggle(!editFormToggle)
 }

  return (
<div className="profile-review">
        <p>{reviewer}</p>
        <h4>{placeName}</h4> <p>{safeness}</p>
        {/* <p>{reviewLocation}</p> */}
        <div>
        <p>{experience}</p>
        </div>
        <div>
        <p>{recommendations}</p>
        <p>likes: {reviewLikes}</p>
        </div>
      <DeleteIcon onClick={handleDelete}/> <EditIcon onClick={handleEditFormToggle}/>
     { editFormToggle ? <div className="review-edit-form">
         <ReviewEditForm placeName={placeName} experience={experience} recommendations={recommendations} safeness={safeness} userReviewId={id}  onEditReview={onEditReview}/>
      </div> : null }
    </div>
 )

}

export default ProfileReview
