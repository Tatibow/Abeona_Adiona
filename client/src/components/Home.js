import React, {useState, useEffect} from "react"
// import TitleBar from "./TitleBar"
import NavBar from "./NavBar"
import LocationReviewList from "./LocationReviewList"
// import NewMap from "./NewMap"
//  import Map from "./Map"
// import {useLoadScript} from "@react-google-maps/api";
//import LocationReviewList from "./LocationReviewList"
import {CssBaseline, Grid } from "@material-ui/core"




function Home({onLogout, currentUser}) {

const [user, setUser] = useState({})
const [locations, setLocations] = useState([])
const [reviews, setReviews] = useState([])
// const [reviewToggle, setReviewToggle] = useState(false)
const [searchInput, setSearchInput] = useState("")

const onSearch = (e) => {
    setSearchInput(e.target.value)
}


// function handleReviewToggle() {
//     setReviewToggle(!reviewToggle)
// }

    useEffect(() => {
        fetch("/locations")
        .then(res => res.json())
        .then(locationData => setLocations(locationData))
    }, [])

    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(userData => setUser(userData))
    }, [])

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

    const addNewLocation = (newLocation) => {
        const locationData = [...locations, newLocation]
        setLocations(locationData)
    }

    function abbreviate(word) {
        const splitWrd =  word.split("")
         return `${splitWrd[0]}${splitWrd[splitWrd.length - 1]}`
      }

    const searchFilter = reviews?.filter(review => {
      if(review.address.toLowerCase().includes(searchInput.toLowerCase())) {
        return review
      } else if (review.place_name.toLowerCase().includes(searchInput.toLowerCase())) {
        return review
      } else if(review.address.toLowerCase().includes(abbreviate(searchInput.toLowerCase()))) {
        return review;
      }
    })

    const addLikes = (addedLikes) => {
        const withAddedLikes = reviews.map(review => review.id === addedLikes.id ? addedLikes : review)
        setReviews(withAddedLikes)
    }

// console.log("Home line 30: ", user)
return (
    <div className = "home">
        <CssBaseline/>
        {/* <TitleBar/> */}
        <h1>Abeona/Adiona</h1>
        {/* <Grid container spacing={5} style={{width: "100%"}}>
        <Grid item xs={12} md={4}> */}
         <NavBar onLogout={onLogout} user={user} locations={locations} searchInput={searchInput} onSearch={onSearch}/*handleReviewToggle={handleReviewToggle}*/ addNewReview={addNewReview} addNewLocation={addNewLocation}/>
        {/* </Grid> */}
        {/* <Grid style={{height: "50vh"}} item xs={12} md={8}> */}
        {/* <div id="mapContainer"> */}
            {/* <div id="mapClipPath"> */}
        {/* <Map locations={locations}/> */}
                {/* <NewMap /> */}
                {/* <MapBoxMap/> */}
            {/* </div> */}
        {/* </div> */}
        {/* </Grid> */}
        {/* </Grid> */}
        <LocationReviewList user={user} reviews={searchFilter} currentUser={currentUser} addLikes={addLikes} />
    </div>
)
}

export default Home
