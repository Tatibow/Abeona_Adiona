import React, {useState} from "react"
import { Grid, MenuItem, FormControl, Select } from "@material-ui/core"
import useStyles from "./ListStyles.js"
import LocationReview from "./LocationReview"

function LocationReviewList ({reviews, currentUser, addLikes}) {
    const [safeness, setSafeness]= useState("All")
    const classes = useStyles()

    const safenessFilter = reviews.filter(review => {
        if(safeness === "All") return true
        return review.safeness === safeness
    })

     const reviewsMap = safenessFilter?.map(review => {
          return  <Grid item key={review.id} xs={12}>
            <LocationReview
                id={review.id}
                currentUser={currentUser}
                placeName={review.place_name}
                experience={review.experience}
                recommendations={review.recommendations}
                safeness={review.safeness}
                reviewLikes={review.review_likes}
                reviewer={review.reviewer}
                reviewLocation={review.location.address}
                comments={review.comments}
                addLikes={addLikes}
              review={review}
                key={review.id}
             />
             </Grid>
     })
return (
    <div >
    <h4>Reviews</h4>
    <FormControl className={classes.formControl}>
        <Select value={safeness} onChange={(e) => setSafeness(e.target.value)}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="safe for poc">safe for poc</MenuItem>
            <MenuItem value="safe but poc proceed with caution">poc proceed with caution</MenuItem>
            <MenuItem value="safe for moc but unsafe for woc">safe for moc but unsafe for woc</MenuItem>
            <MenuItem value="unsafe for poc">unsafe for poc</MenuItem>
            <MenuItem value="safe for all women">safe for all women</MenuItem>
            <MenuItem value="safe but women proceed with caution">women proceed with caution</MenuItem>
            <MenuItem value="safe non-woc unsafe for woc">safe non-woc unsafe for woc</MenuItem>
            <MenuItem value="unsafe for women">unsafe for women</MenuItem>
            <MenuItem value="safe for lgbtq+">safe for lgbtq+</MenuItem>
            <MenuItem value="safe but lgbtq+ proceed with caution">lgbtq+ proceed with caution</MenuItem>
            <MenuItem value="unsafe for lgbtq+">unsafe for lgbtq+</MenuItem>
            <MenuItem value="unsafe for women & lgbtq+">unsafe for women & lgbtq+</MenuItem>
            <MenuItem value="safe for all">safe for all</MenuItem>
            <MenuItem value="unsafe for all">unsafe for all</MenuItem>
         </Select>
     </FormControl>
     <Grid container spacing={3} className={classes.list}>
         {reviewsMap}
    </Grid>
    </div>
)
}

export default LocationReviewList
