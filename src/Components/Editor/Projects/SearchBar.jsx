import React from "react"
import SearchResults from "./SearchResults"
import {motion} from "framer-motion"


const searchBarInitialState = {
    searchInput: ""
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
        <div>
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
                />
                <div className='close-icon-container' >
                    <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007181968129138738/icons8-close-48.png" alt="" className='icon close' onClick={this.handleClose} />
                </div>
            </div>
             {this.state.searchInput ? (
                <motion.div
                 initial={{ scale: 0, opacity: 0}}
                 animate={{ scale: 1, opacity: 1}}              
                 transition={{duration: 0.5, type: "tween",}} 
                >
                    <SearchResults value={this.state.searchInput}/>
                </motion.div>
             ) : null}
        </div>
        )
    }
}

export default SearchBar