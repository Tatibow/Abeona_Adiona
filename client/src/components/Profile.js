import React, {useState, useEffect} from "react"
import ProfileTitleBar from "./ProfileTitleBar"
import ProfileReviewList from "./ProfileReviewList"
// import ProfileEditor from "./ProfileEditor";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Profile() {
    // use this link as alt for profile pic
    //https://i.postimg.cc/tT1wHRYc/Unknown-person.jpg
    const [userData, setUserData] =  useState({})
    const [userReviews, setUserReviews] = useState([])

    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(user => {
            setUserData(user)
            setUserReviews(user.reviews)
        })
    }, [])





const likeCount = userReviews.map(review => review.review_likes)
const totalSumLikes = likeCount.reduce((accum, el) => accum += el, 0)

const deleteMyReview = (id) => {
  const withoutDeletedReviews = userReviews.filter(userReview => {
    return userReview.id !== id
  })

  fetch(`/reviews/${id}`, {
     method: "DELETE",
     headers: {
        "Content-Type": "application/json"
     }
  })
  .then(res => res.json())
  .then(setUserReviews(withoutDeletedReviews))
}

const onEditReview = (updatedReview)  => {
    const withUpdatedReviews = userReviews.map(userReview => userReview.id === updatedReview.id ? updatedReview : userReview);
    setUserReviews(withUpdatedReviews);
  }

return (
    <div className="profile">
    <ProfileTitleBar userData={userData} amountOfReviews={userReviews.length} totalSumLikes={totalSumLikes}/>
    <ProfileReviewList userReviews={userReviews}  deleteMyReview={deleteMyReview} onEditReview={onEditReview}/>
    {/* <Router>
      <Switch>
          <Route path="/profeditor">
            <ProfileEditor />
          </Route>
        </Switch>
      </Router> */}
    </div>
)
}

export default Profile
