import React from "react"
import SearchBar from "./SearchBar"
import {Typography} from "@material-ui/core"


function TitleBar() {

return (
    <div className="title-bar">
    {/* <AppBar  position="static"> */}
          {/* <Toolbar style={{color:"antiquewhite"}} className="toolbar"> */}
               <Typography variant="h5">
                    Abeona/Adiona
               </Typography>
                <SearchBar/>
          {/* </Toolbar> */}
      {/* </AppBar> */}
    </div>
)
}

export default TitleBar
