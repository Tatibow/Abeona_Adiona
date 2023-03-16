import React from "react"
import TitleBar from "./TitleBar"
import NavBar from "./NavBar"
import Map from "./Map"
import MiniNav from "./MiniNav"


function Home({onLogout}) {

return (
    <div className = "home">
    <TitleBar/>
    <NavBar/>
    <Map/>
    <MiniNav onLogout={onLogout}/>
    </div>
)
}

export default Home
