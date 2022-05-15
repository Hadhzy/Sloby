import React, {Component, useState, useCallback} from "react"
import {useDropzone} from 'react-dropzone'

function UploadImages() {
  const [files, setFiles] = useState([])
  const [fileNames, setFileNames] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles)
    setFileNames(acceptedFiles.map(file => file.name))
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return(
    <div className="upload-image-container" {...getRootProps()}>
      <div className="upload-container">
        
        <span className="image-icon">{isDragActive ? "📂" : "📁"}</span>
        <p className="description">Drag'n'drop images, or click to select files</p>

        <AcceptedFiles />
      </div>
    </div>
  )

  function AcceptedFiles() {
     return(
      <div className="accepted-files-container">
      {fileNames.map(file => {
        return(
          <div key={file}>
            {file}
          </div>
        )
      })}
      </div>
     )
  }
}

export default UploadImages