import React from "react"

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
        <>
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
        </>
        )
    }
}

export default SearchBar