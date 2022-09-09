import React, {useContext} from "react";
import ErrorIcon from "@material-ui/icons/Error"
import { ProjectsHandlerContext } from "../../Context/ProjectsHandlerContext";
import { ProjectsContext } from "../../Context/ProjectsContext";
import { faThList } from "@fortawesome/free-solid-svg-icons";


const initialState = {
    name: "",
    nameError: "",
    description: "",
    descriptionError: "",
}


function Popup() {
    const {setPopup, setNotification} = useContext(ProjectsHandlerContext)
    const { dispatch } = useContext(ProjectsContext)

    class PopupContent extends React.Component {
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

            if(this.state.description.split("").length <= 12 ) {
                descriptionError = "Please enter a description that at least 12 characters long!"
            }
           
            if(nameError ) {
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
                dispatch({ type: 'ADD_PROJECT',  project: {
                    name: this.state.name,
                    description: this.state.description,
                    type: "project"
                }})
                this.setState(initialState)
                setPopup(false)
            }
        }
    
    
    
        render() {
            return (
            <form className='popup-container' onSubmit={this.handleSubmit}>
                <div className='popup-content'>
                       <div className='upbar-container'>
                          <div className='icon-container close'>
                            <div className="title">Create Your Project</div>
                                <div className="image-container">
                                    <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007181968129138738/icons8-close-48.png" alt="" onClick={() => setPopup(false)} className='icon close smaller' />
                                </div> 
                          </div> 
                       </div>
                        <div className='inputs'>
                            <label className='input-content'>
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
                                <textarea 
                                type="text"
                                value={this.state.description}
                                name="description"
                                onChange={this.handleChange}
                                className={`${this.state.descriptionError ? "error-input" : "input textarea"}`}
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

    return <PopupContent />
} 

export default Popup