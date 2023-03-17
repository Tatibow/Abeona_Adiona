import React from "react"
import {InputBase, Box} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";



function SearchBar() {

return (
    <Box display="flex">
        {/* <Autocomplete> */}
            <div className="search">
                <div>
                    <SearchIcon/>
                </div>
                    <InputBase placeholder="search..." />
                </div>
        {/* </Autocomplete> */}
    </Box>
)
}

export default SearchBar
