import React, { useEffect } from "react"
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded"

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div className='modal'>
      <p>{modalContent}</p>
      <CheckCircleRoundedIcon className='modal-icon' />
    </div>
  )
}

export default Modal
