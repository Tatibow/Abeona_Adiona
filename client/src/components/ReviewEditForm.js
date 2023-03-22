import React, {useState} from "react"
import {InputBase, Button, TextField,  MenuItem, Select} from "@material-ui/core"


 function ReviewEditForm({userReviewId, onEditReview, placeName, experience, recommendations, safeness}) {
     // review usestate
const [newPlaceName, setNewPlaceName] = useState(placeName)
const [newExperience, setNewExperience] = useState(experience)
const [newRecommendations, setNewRecommendations] = useState(recommendations)
const [newSafeness, setNewSafeness] = useState(safeness)



        const handleUpdatedReview = (e) => {
            e.preventDefault()

            let updatedReview = {
                place_name: newPlaceName,
                experience: newExperience,
                recommendations: newRecommendations,
                safeness: newSafeness
            }

            fetch(`/reviews/${userReviewId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedReview)
            })
            .then(res => res.json())
            .then(onEditReview)

            setNewPlaceName("")
            setNewExperience("")
            setNewRecommendations("")
            setNewSafeness("")
        }


    return (
      <div className="form">
        <form onSubmit={handleUpdatedReview} className="review-form">
                <InputBase
                    type="text"
                    name="newPlaceName"
                    onChange={(e) => setNewPlaceName(e.target.value)}
                    value={newPlaceName}
                    placeholder="establishment/city name/town name/etc..."
                    id="spaceDefault" /> <br />
                <TextField
                    id="outlined-textarea"
                    multiline
                    type="text"
                    name="newExperience"
                    onChange={(e) => setNewExperience(e.target.value)}
                    value={newExperience}
                    label="What was your experience?"
                    className="spaceDefault" />  <br />
                <TextField
                    id="outlined-textarea"
                    multiline
                    type="text"
                    name="newRecommendations"
                    onChange={(e) => setNewRecommendations(e.target.value)}
                    value={newRecommendations}
                    label='Any recommendations? If not enter "no recommendations"'
                    className="spaceDefault" />  <br />
                <Select value={newSafeness} onChange={(e) => setNewSafeness(e.target.value)}>
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
                <Button type="submit" variant="contained">Submit Updated Review</Button>
            </form>
      </div>
    )
}

 export default ReviewEditForm
