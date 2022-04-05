import React, { useEffect } from "react"
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded"
import ErrorIcons from "@material-ui/icons/Error"
import AnnouncementIcon from "@material-ui/icons/Announcement"
const Modal = ({ modalContent, closeModal, modalType }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div>
      {modalType === "add-item" && (
        <div className='modal-add-item-container'>
          <p>{modalContent}</p>
          <CheckCircleRoundedIcon />
        </div>
      )}
      {modalType === "no-value" && (
        <div className='modal-no-value-container'>
          <p>{modalContent}</p>
          <ErrorIcons />
        </div>
      )}
      {modalType === "item-removed" && (
        <div className='modal-item-removed'>
          <p>{modalContent}</p>
          <AnnouncementIcon />
        </div>
      )}
    </div>
  )
}

export default Modal
