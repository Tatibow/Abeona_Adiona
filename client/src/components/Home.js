import React, {useState, useEffect} from "react"
// import TitleBar from "./TitleBar"
import NavBar from "./NavBar"
import Map from "./Map"
// import {useLoadScript} from "@react-google-maps/api";
//import LocationReviewList from "./LocationReviewList"
import {CssBaseline, Grid } from "@material-ui/core"



function Home({onLogout, currentUser}) {
    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAP_API_KEY
    // })
    const [user, setUser] = useState({})
     const [locations, setLocations] = useState([])

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
// console.log("Home line 30: ", user)
return (
    <div className = "home">
        <CssBaseline/>
        {/* <TitleBar/> */}
        <Grid container spacing={5} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
         <NavBar onLogout={onLogout} user={user} locations={locations}/>
        </Grid>
        <Grid style={{height: "50vh"}} item xs={12} md={8}>
        {/* {!isLoaded ? <h1>Loading...</h1> : <Map/>} */}
        <Map locations={locations}/>
        </Grid>
        </Grid>
    </div>
)
}

export default Home
