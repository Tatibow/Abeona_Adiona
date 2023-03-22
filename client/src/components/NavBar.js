import React, {useState, useEffect} from "react"
// import MarkerMeanings from "./MarkerMeanings"
import ReviewForm from "./ReviewForm"
import MiniNav from "./MiniNav"
import SearchBar from "./SearchBar"

import { Button} from "@material-ui/core"
 import LocationReviewList from "./LocationReviewList"

function NavBar({onLogout, currentUser, user, locations}) {
    const [searchInput, setSearchInput] = useState("")
    const [reviews, setReviews] = useState([])
    const [reviewToggle, setReviewToggle] = useState(false)
    const [reviewFormToggle, setReviewFormToggle] = useState(false)
    const [miniNavToggle, setMiniNavToggle] = useState(false)

    useEffect(() => {
        fetch("/reviews")
        .then(res => res.json())
        .then((res) => {
            setReviews(res)
        })
    }, [])
    console.log("reviews: ", reviews)

    const addNewReview = (newReview) => {
        const reviewData = [...reviews, newReview]
        setReviews(reviewData)
    }

    const onSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const searchFilter = reviews?.filter(review => {
      if(review.address.toLowerCase().includes(searchInput.toLowerCase())) {
        return review
      } else if (review.place_name.toLowerCase().includes(searchInput.toLowerCase())) {
        return review
      } 
    })

    const addLikes = (addedLikes) => {
        const withAddedLikes = reviews.map(review => review.id === addedLikes.id ? addedLikes : review)
        setReviews(withAddedLikes)
    }

    function handleReviewToggle() {
        setReviewToggle(!reviewToggle)
    }

    function handleReviewFormToggle() {
        setReviewFormToggle(!reviewFormToggle)
    }

    function handleMiniNavToggle() {
        setMiniNavToggle(!miniNavToggle)
    }

return (
    <div className="nav-bar">
        <Button onClick={handleMiniNavToggle}><h2>{user.username}</h2></Button>
        {miniNavToggle ? <MiniNav onLogout={onLogout}/> : null}
        <SearchBar searchInput={searchInput} onSearch={onSearch}/>
        {/* <MarkerMeanings/> */}
        <Button variant="contained" onClick={handleReviewToggle}>See Reviews</Button>
        { reviewToggle ? <LocationReviewList reviews={searchFilter} currentUser={currentUser} addLikes={addLikes}/*reviews={reviews}*/ /> : null}
        <Button variant="contained" onClick={handleReviewFormToggle}>ReviewForm</Button>
        {reviewFormToggle ? <ReviewForm user={user} addNewReview={addNewReview} locations={locations}/> : null}
    </div>
)
}

export default NavBar
