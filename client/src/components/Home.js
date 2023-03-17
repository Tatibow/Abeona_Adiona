import React from "react"
import TitleBar from "./TitleBar"
import NavBar from "./NavBar"
import Map from "./Map"
// import {useLoadScript} from "@react-google-maps/api";
//import LocationReviewList from "./LocationReviewList"
import {CssBaseline, Grid } from "@material-ui/core"



function Home({onLogout}) {
    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAP_API_KEY
    // })

return (
    <div className = "home">
        <CssBaseline/>
        {/* <TitleBar/> */}
        <Grid container spacing={5} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
         <NavBar onLogout={onLogout}/>
        </Grid>
        <Grid style={{height: "50vh"}} item xs={12} md={8}>
        {/* {!isLoaded ? <h1>Loading...</h1> : <Map/>} */}
        <Map/>
        </Grid>
        </Grid>
    </div>
)
}

export default Home
