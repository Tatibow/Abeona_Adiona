import React, {useState, useEffect} from "react"
// import MarkerMeanings from "./MarkerMeanings"
import ReviewForm from "./ReviewForm"
import MiniNav from "./MiniNav"
import SearchBar from "./SearchBar"
 import LocationReviewList from "./LocationReviewList"

function NavBar({onLogout, currentUser}) {
    const [searchInput, setSearchInput] = useState("")
    const [reviews, setReviews] = useState([])

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
      return review.address.toLowerCase().includes(searchInput.toLowerCase())
    })

return (
    <div className="nav-bar">
        <MiniNav onLogout={onLogout}/>
        <SearchBar searchInput={searchInput} onSearch={onSearch}/>
        {/* <MarkerMeanings/> */}
        <LocationReviewList reviews={searchFilter} currentUser={currentUser} /*reviews={reviews}*/ />
        <ReviewForm currentUser={currentUser} addNewReview={addNewReview}/>
    </div>
)
}

export default NavBar
