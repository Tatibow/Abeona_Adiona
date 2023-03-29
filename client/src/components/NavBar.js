import React, { useState } from "react"
// import MarkerMeanings from "./MarkerMeanings"
import ReviewForm from "./ReviewForm"
import MiniNav from "./MiniNav"
import SearchBar from "./SearchBar"

import { Button } from "@material-ui/core"
//  import LocationReviewList from "./LocationReviewList"

function NavBar({ onLogout, currentUser, user, locations, searchInput, onSearch, addNewReview, addNewLocation }) {
    // const [searchInput, setSearchInput] = useState("")
    // const [reviews, setReviews] = useState([])
    // const [reviewToggle, setReviewToggle] = useState(false)
    const [reviewFormToggle, setReviewFormToggle] = useState(false)
    const [miniNavToggle, setMiniNavToggle] = useState(false)

    // useEffect(() => {
    //     fetch("/reviews")
    //     .then(res => res.json())
    //     .then((res) => {
    //         setReviews(res)
    //     })
    // }, [])
    // console.log("reviews: ", reviews)

    // const addNewReview = (newReview) => {
    //     const reviewData = [...reviews, newReview]
    //     setReviews(reviewData)
    // }

    // const onSearch = (e) => {
    //     setSearchInput(e.target.value)
    // }


    // function abbreviate(word) {
    //     const splitWrd =  word.split("")
    //      return `${splitWrd[0]}${splitWrd[splitWrd.length - 1]}`
    //   }

    // const searchFilter = reviews?.filter(review => {
    //   if(review.address.toLowerCase().includes(searchInput.toLowerCase())) {
    //     return review
    //   } else if (review.place_name.toLowerCase().includes(searchInput.toLowerCase())) {
    //     return review
    //   } else if(review.address.toLowerCase().includes(abbreviate(searchInput.toLowerCase()))) {
    //     return review;
    //   }
    // })

    // const addLikes = (addedLikes) => {
    //     const withAddedLikes = reviews.map(review => review.id === addedLikes.id ? addedLikes : review)
    //     setReviews(withAddedLikes)
    // }

    // function handleReviewToggle() {
    //     setReviewToggle(!reviewToggle)
    // }

    function handleReviewFormToggle() {
        setReviewFormToggle(!reviewFormToggle)
    }

    function handleMiniNavToggle() {
        setMiniNavToggle(!miniNavToggle)
    }

    const unknownPerson = "https://i.postimg.cc/tT1wHRYc/Unknown-person.jpg"


    return (
        <div className="nav-bar" >
            <Button onClick={handleMiniNavToggle}><h2><img src={user.profile_img} alt={unknownPerson} className="profile-pic" />{user.username}</h2></Button>
            {miniNavToggle ? <MiniNav onLogout={onLogout} /> : null}
            <SearchBar searchInput={searchInput} onSearch={onSearch} />
            {/* <Button variant="contained" onClick={handleReviewToggle}>See Reviews</Button> */}
            {/* { reviewToggle ? <LocationReviewList user={user} reviews={searchFilter} currentUser={currentUser} addLikes={addLikes} /> : null} */}
            <Button variant="contained" onClick={handleReviewFormToggle}>Review Form</Button>
            {reviewFormToggle ? <ReviewForm user={user} addNewReview={addNewReview} locations={locations} addNewLocation={addNewLocation} /> : null}
        </div>
    )
}

export default NavBar
