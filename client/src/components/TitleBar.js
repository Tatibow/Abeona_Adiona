import React from "react"
import {Typography} from "@material-ui/core"


function TitleBar() {
     // onClick username to toggle mini nav

return (
    <div className="title-bar">
    {/* <AppBar  position="static"> */}
          {/* <Toolbar style={{color:"antiquewhite"}} className="toolbar"> */}
          <p>{"username"}</p>
               <Typography variant="h5">
                    Abeona/Adiona
               </Typography>
          {/* </Toolbar> */}
      {/* </AppBar> */}
    </div>
)
}

export default TitleBar
