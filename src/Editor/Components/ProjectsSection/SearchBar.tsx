import React, {useRef} from "react"
import SearchResults from "./SearchResults"
import {motion} from "framer-motion"
import { faThList } from "@fortawesome/free-solid-svg-icons"
import {IoMdClose} from "react-icons/io"
import {IoMdSearch} from "react-icons/io"
import { ChangeEvent } from "react"
import { IsearchBarInitialState } from "../../types"

const searchBarInitialState: IsearchBarInitialState = {
    searchInput: "",
    isInputFocused: false,
}


class SearchBar extends React.Component {
    state = searchBarInitialState
    
    handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleClose = () => {
        this.setState(searchBarInitialState)
    }
    
    render() {
        
        return(
        <div className="searchbar-container">
            <div className='search-bar'>
                <div className="search-icon-container">
                    <IoMdSearch className="search-icon" style={{ color: "#727173", fontSize: "21px", marginRight: "-10px"}}/>
                </div>
                <input 
                    type="text"
                    className='search-input'
                    placeholder="Search"
                    value={this.state.searchInput}
                    onChange={this.handleChange}
                    name="searchInput"
                    onFocus={() => this.setState({ isInputFocused: true})}
                    onKeyPress={(e) => e.key === " " && this.state.isInputFocused && this.state.searchInput === "" ? e.preventDefault() : e.stopPropagation()}
                />
                <div className='close-icon-container' id="closeIcon">
                    <IoMdClose className="close-icon" onClick={this.handleClose} style={{ color: "#727173", fontSize: "21px", marginRight: "5px"}}/>
                </div>
            </div>
            {
                this.state.isInputFocused ? (
                    <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.3, delay: 0.2}}
                >
                    <SearchResults searchInput={this.state.searchInput}/>
                </motion.div>
                ) : null
            }
        </div>
        )
    }
}


export default SearchBar