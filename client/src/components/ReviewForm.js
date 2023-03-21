import React, {useState} from "react"
import {InputBase, Button, TextField,  MenuItem, Select, FormControl } from "@material-ui/core"





function ReviewForm({user, addNewReview}) {
    // review usestate
const [placeName, setPlaceName] = useState("")
const [experience, setExperience] = useState("")
const [recommendations, setRecommendations] = useState("")
const [safeness, setSafeness] = useState("")


//location usestate
const [address, setAddress] = useState("")


    function handleLocationSubmit(e) {
        e.PreventDefault()

       let newLocation = {
            address: address
        }

        fetch("/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        })
        .then(res => res.json())
        .then(handleReviewSubmit)
    }

    function handleReviewSubmit(e, newLocation) {
        e.preventDefault()

        let newReview = {
            place_name: placeName,
            experience: experience,
            recommendations: recommendations,
            safeness: safeness,
            review_likes: 0,
            user_id: user.id,
            location_id: newLocation.id
        }

        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(addNewReview)
    }

    return (
      <div className="form">
        <form onSubmit={handleLocationSubmit} className="location-form">
            <InputBase
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="enter locations address..."
            /> <br/>
        </form>
            <form onSubmit={handleReviewSubmit} className="review-form">
            <InputBase
              type="text"
              name="placeName"
              onChange={(e) => setPlaceName(e.target.value)}
              value={placeName}
              placeholder="establishment/city name/town name/etc..."
            /> <br/>
            <TextField
             id="outlined-textarea"
             multiline
             type="text"
              name="experience"
              onChange={(e) =>  setExperience(e.target.value)}
              value={experience}
              label="What was your experience?"
        />  <br/>
           <TextField
             id="outlined-textarea"
              multiline
             type="text"
              name="recommendations"
              onChange={(e) => setRecommendations(e.target.value)}
              value={recommendations}
              label='Any recommendations? If not enter "no recommendations"'
        />  <br/>
        <Select value={safeness} onChange={(e) => setSafeness(e.target.value)}>
            <MenuItem value="safe for poc">safe for poc</MenuItem>
            <MenuItem value="safe but poc proceed with caution">poc proceed with caution</MenuItem>
            <MenuItem value="safe for moc but unsafe for woc">safe for moc but unsafe for woc</MenuItem>
            <MenuItem value="unsafe for poc">unsafe for po</MenuItem>
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
            </form> 
            <Button type="submit" variant="contained">Submit Review</Button>
      </div>
    )

}

export default ReviewForm
