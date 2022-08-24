import React, {useContext} from "react";
import ErrorIcon from "@material-ui/icons/Error"
import { ProjectsHandlerContext } from "../../Context/ProjectsHandlerContext";


const initialState = {
    name: "",
    nameError: "",
}


function Popup() {
    const {setPopup, setNotification} = useContext(ProjectsHandlerContext)

    class PopupContent extends React.Component {
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

    return <PopupContent />
} 

export default Popup