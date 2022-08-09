
import React, {useContext, useState, useEfffect, useEffect} from 'react'
import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'
import { Link } from "react-router-dom"
import {ContentContext} from "../Context/ContentContext"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CloseIcon from "@material-ui/icons/Close"
import {TextField} from "@material-ui/core"
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import ErrorIcon from "@material-ui/icons/Error"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify'
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder"
import SearchIcon from "@material-ui/icons/Search"
import { motion } from "framer-motion"


function ProjectHandler() {

    const {menu_bar_items} = useContext(ContentContext)
    const [popup, setPopup] = useState(false)

    const SideMenuBar = () => {
        return(
            <div className='menu-bar-container'>
                <div className="icon">
                    <Link to="/" className='white'>
                        <ArrowBackIosIcon className="arrow-icon"/>
                    </Link>
                </div>
                {
                   menu_bar_items.map((item) => (
                    <div className='menu-items' key={item.id}>
                        <Link to={item.path} className='off-link-dec'>
                            {item.title}
                        </Link>
                    </div>
                   ))                         
                }
                

            </div>
        )
    }
    
    

    const [notification, setNotification] = useState(false)
    
    const Projects = () => {
        return(
            <div className='project-creator-container'>
                
            </div>
        )
    }


    const initialState = {
        name: "",
        description: "",
        nameError: "",
        descriptionError: "",  
    }


    const NotificationAlert = () => {
        useEffect(() => {
           toast.success("Success") 
        }, [])


        return (
           <div className='notification-alert-container'>
                <ToastContainer theme="dark" />
           </div>
        )
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
            let descriptionError = ""

            if(this.state.name.split("").length <= 5) {
                nameError = "Please enter a name that at least 6 characters long!"
            }

            if(this.state.description.split("").length <= 11) {
                descriptionError = "Please enter a description that at least 12 characters long!"
            }

            if(nameError || descriptionError) {
                this.setState({ nameError, descriptionError })
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
                //clear the form if it is valid
                this.setState(initialState)
                setPopup(false)
                this.handleNotification()

                //in here goes the post request after validation
            }
        }

        


        render() {
            return (
                <form className='popup-container' onSubmit={this.handleSubmit}>
                    <div className='popup-content'>
                       <div className='upbar-container'>
                        <div className='title'>
                                Create Your Own Project
                            </div> 
                            <div className='icon-container'>
                                    <CloseIcon className='close-icon' onClick={() => setPopup(false)}/>
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

                            <label className='input-content'>
                                Description
                                <textarea 
                                type="text"
                                value={this.state.description}
                                name="description"
                                onChange={this.handleChange}
                                className={`${this.state.descriptionError ? "error-input" : "textarea"}`}
                                placeholder='give the project description...'
                                />
                                <div className="errors">
                                    <div className='error-message'>{this.state.descriptionError}</div>
                                    {this.state.descriptionError ? <ErrorIcon className="error-icon" /> : null}
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
                    Projects
                </div>
                <div className='search-bar'>
                    <div className="search-icon-container">
                        <img src="https://i.ibb.co/74mkvm1/icons8-search-48.png" alt="" className='icon' />
                    </div>
                    <input type="text" className='search-input' placeholder="Find your Projects & Folders..."/>
                  
                </div>
                <div className='handler-buttons'>
                    <button className="button-base new-project" onClick={() => setPopup(true)}> <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="icons8-web-design-48" className='icon'></img> New Project</button>
                    <button className="button-base new-folder"> <img src="https://i.ibb.co/RYZbbws/icons8-add-folder-48.png" alt="" className='icon'/> New Folder</button>
                </div>
            </div>
            {notification && <NotificationAlert />}
        </div>
        )
    }


  return (
    <div className="project-handler-container">
          <UpSection />  
       <div className='display-flex'>
          <SideMenuBar />
          <Projects />  
          {popup && <Popup />}
       </div>
    </div>
  )
}

export default ProjectHandler