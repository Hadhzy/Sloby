import React, {useRef} from "react"
import SearchResults from "./SearchResults"
import {motion} from "framer-motion"
import { faThList } from "@fortawesome/free-solid-svg-icons"


const searchBarInitialState = {
    searchInput: "",
    isInputFocused: false,
}




class SearchBar extends React.Component {
    state = searchBarInitialState
    
    handleChange = (event) => {
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
                    <img src="https://i.ibb.co/74mkvm1/icons8-search-48.png" alt="" className='icon' />
                </div>
                <input 
                type="text"
                className='search-input'
                placeholder="Find your Projects & Folders..."
                value={this.state.searchInput}
                onChange={this.handleChange}
                name="searchInput"
                onFocus={() => this.setState({ isInputFocused: true})}
                onKeyPress={(e) => e.key === " " && this.state.isInputFocused && this.state.searchInput === "" ? e.preventDefault() : e.stopPropagation()}
                />
                <div className='close-icon-container' id="closeIcon">
                    <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007181968129138738/icons8-close-48.png" alt="" className='icon close' 
                    onClick={this.handleClose}

                    />
                </div>
            </div>
            {
                this.state.isInputFocused ? (
                    <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.2, delay: 0.1}}
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