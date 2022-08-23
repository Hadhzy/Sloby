
import React, {useContext, useState, useEfffect, useEffect} from 'react'
import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'
import { Link } from "react-router-dom"
import {ContentContext} from "../../Context/ContentContext"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CloseIcon from "@material-ui/icons/Close"
import {TextField} from "@material-ui/core"
import { faSmile, faThList, faUserInjured } from '@fortawesome/free-solid-svg-icons'
import ErrorIcon from "@material-ui/icons/Error"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import "react-toastify/dist/ReactToastify.css"
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder"
import SearchIcon from "@material-ui/icons/Search"
import { motion } from "framer-motion"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import SideMenuBar from './SideMenuBar'
import { ProjectsContext } from "../../Context/ProjectsContext"
import ProjectsContainer from "./ProjectsContainer"

function ProjectHandler() {

    const [popup, setPopup] = useState(false)

    
    
    

    const [notification, setNotification] = useState(false)
    
    


    const initialState = {
        name: "",
        nameError: "",
    }


    class Popup extends React.Component {
        state = initialState

        handleChange = (event) => {
            this.setState({ 
                [event.target.name]: event.target.value
            })
        }


        validateForm = () => {
            let nameError = ""

            if(this.state.name.split("").length <= 5) {
                nameError = "Please enter a name that at least 6 characters long!"
            }
           
            if(nameError ) {
                this.setState({ nameError, })
                return false
            }

            return true

        }

        handleNotification = () => {
            setNotification(true) 
            setTimeout(() => {
                setNotification(false)
            }, 6000)
        }

        handleSubmit = (event) => {
            event.preventDefault()
            const isValid = this.validateForm()    


            if(isValid) {
            

                this.setState(initialState)
                setPopup(false)
                this.handleNotification()

               
            }
        }

        


        render() {
            return (
            <form className='popup-container' onSubmit={this.handleSubmit}>
                <div className='popup-content'>
                       <div className='upbar-container'>
                            <div className='icon-container close'>
                                <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007181968129138738/icons8-close-48.png" alt="" onClick={() => setPopup(false)} className='icon close smaller' />
                            </div> 
                       </div>
                        <div className='inputs'>
                            <label className='input-content'>
                                ProjectName
                                <input 
                                type="text"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleChange}
                                className={`${this.state.nameError ? "error-input" : "input"}`}
                                placeholder='give the project name...'
                                />
                               
                                
                                <div className="errors">
                                    <div className='error-message'>{this.state.nameError}</div>
                                    {this.state.nameError ? <ErrorIcon className="error-icon" /> : null}
                                </div> 
                        

                            </label>

                        </div>
                        <div className='for-the-button'>
                            <button className="blue-button">Submit</button>
                    </div>
                </div>
            </form>
            )
        }
    }    

    




    const UpSection = () => {


        return(
        <div className="main-div">
            <div className='upsection-container'>
                <div className='project-title'>
                        <img src="https://cdn.discordapp.com/attachments/753660501996863488/1011564091401314344/icons8-male-user-96.png" alt="" className='base-icon '/>
                        <div className="user-details">
                            gaborhadhazy
                            gaborhadhazy@gmail.com
                        </div>    
                </div>
                  <SearchBar />  
                <div className='handler-buttons'>
                    <button className="button-base new-project" onClick={() => setPopup(true)}> <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="icons8-web-design-48" className='icon'></img> New Project</button>
                    <button className="button-base new-folder">  <img src="https://cdn.discordapp.com/attachments/753660501996863488/1006217245485174844/unknown.png" alt="" className="icon"/> New Folder</button>
                </div>
            </div>

        </div>
        )
    }

    

    


  return (
    <div className="project-handler-container">
          <UpSection />  

       <div className='display-flex'>
          <SideMenuBar />
          <ProjectsContainer notification={notification}/>  
          {popup && <Popup />}
       </div>
    </div>
  )
}

export default ProjectHandler