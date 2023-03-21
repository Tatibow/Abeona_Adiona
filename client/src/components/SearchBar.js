import React from "react"
import {InputBase, Box} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";



function SearchBar({searchInput, onSearch}) {


return (
    <Box display="flex">
        {/* <Autocomplete> */}
            <div className="search">
                <SearchIcon/> <InputBase
                 type="text"
                 name="searchInput"
                 onChange={onSearch}
                 value={searchInput}
                 placeholder="search..."
                 />
                </div>
        {/* </Autocomplete> */}
    </Box>
)
}

export default SearchBar
