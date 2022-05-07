import React, {Component} from "react"
import UploadFileOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

class UploadImages extends Component {
    fileSelectedHandler = event => {
        console.log(event.target.files[0])
    }
    
    render() {
        return(
        <div className="upload-image-container">
          <div className="upload-container">
              <UploadFileOutlinedIcon className="icon"/>
              <div className="file-upload">
                <input type="file" id="fileUpload" onChange={this.fileSelectedHandler}/>
              </div>
          </div>
      </div>
      )
    }
  }

export default UploadImages