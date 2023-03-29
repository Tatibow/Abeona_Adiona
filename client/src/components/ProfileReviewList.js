import React from "react"
import ProfileReview from "./ProfileReview"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Grid} from "@material-ui/core"


function ProfileReviewList({userReviews, deleteMyReview, onEditReview}) {

  const sortUserReviews = userReviews.sort((a,b) => b.created_at.split("T")[0].split("-")[2] - a.created_at.split("T")[0].split("-")[2])


      const userReviewMap = sortUserReviews.map(userReview => {
    //    return  <Grid item key={userReview.id} xs={12}>
       return <ProfileReview
        id={userReview.id}
        placeName={userReview.place_name}
        experience={userReview.experience}
        recommendations={userReview.recommendations}
        safeness={userReview.safeness}
        reviewLikes={userReview.review_likes}
        reviewer={userReview.reviewer}
        deleteMyReview={deleteMyReview}
        onEditReview={onEditReview}
        dateStamp={userReview.created_at}
        key={userReview.id}
        />
        // </Grid>
      })

    return(
      <div className="carousel">
            <Carousel>
                  {userReviewMap}
            </Carousel>
            </div>
      )

    }

    // <div id="topSpaceDefault"className="user-reviews">
    //     {userReviewMap}
    // </div>
export default ProfileReviewList
