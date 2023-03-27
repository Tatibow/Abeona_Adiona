import React, {useState} from "react"
import {Input, Button, TextField,  MenuItem, Select} from "@material-ui/core"





function ReviewForm({user, addNewReview, locations, addNewLocation}) {
    // review usestate
const [placeName, setPlaceName] = useState("")
const [experience, setExperience] = useState("")
const [recommendations, setRecommendations] = useState("")
const [safeness, setSafeness] = useState("")


//location usestate
const [address, setAddress] = useState("")

let globalLoc;
locations.forEach(loc => globalLoc = loc)

    function handleLocationSubmit(e) {
        e.preventDefault()

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
        .then(addNewLocation)
        setAddress("")
    }

    function handleReviewSubmit(e) {
        e.preventDefault()

        let newReview = {
            place_name: placeName,
            experience: experience,
            recommendations: recommendations,
            safeness: safeness,
            review_likes: 0,
            user_id: user.id,
            location_id:globalLoc.id
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

        setPlaceName("")
        setExperience("")
       setRecommendations("")
       setSafeness("")
    }

    return (
      <div className="form">
        <h3>first add your location...</h3>
        <p style={{color:"red"}}>(make sure to add your location before starting your review!)</p>
        <form onSubmit={handleLocationSubmit} className="location-form">
            <Input
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="enter locations address..."
            /> <br/>
              <Button type="submit" variant="contained">add location</Button>
        </form>
        <h3>now submit your review!</h3>
            <form onSubmit={handleReviewSubmit} className="review-form">
            <Input
              type="text"
              name="placeName"
              onChange={(e) => setPlaceName(e.target.value)}
              value={placeName}
              placeholder="establishment/city name/town name/etc..."
              id="spaceDefault"
            /> <br/>
            <TextField
             id="outlined-textarea"
             multiline
             type="text"
              name="experience"
              onChange={(e) =>  setExperience(e.target.value)}
              value={experience}
              label="What was your experience?"
              className="spaceDefault"
        />  <br/>
           <TextField
             id="outlined-textarea"
              multiline
             type="text"
              name="recommendations"
              onChange={(e) => setRecommendations(e.target.value)}
              value={recommendations}
              label='Any recommendations? If not enter "no recommendations"'
              className="spaceDefault"
        />  <br/>
        <Select value={safeness} onChange={(e) => setSafeness(e.target.value)} id="topSpaceDefault">
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
         <h4>select safeness</h4>
            <Button type="submit" id="topSpaceDefault" variant="contained">Submit Review</Button>
            </form>
      </div>
    )

}

export default ReviewForm
