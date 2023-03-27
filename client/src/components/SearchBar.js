import React from "react"
import {InputBase, Box} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";



function SearchBar({searchInput, onSearch}) {


return (
    <>
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
        {/* <p>
            <strong>note:</strong>
            <i> when entering a state it could either be abbreviated or spelled out fully
                for example if i'm looking for places in california I would search both "california"
                and "CA".
            </i>
        </p> */}
        </>
)
}

export default SearchBar
