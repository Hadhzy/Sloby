import React, { useEffect } from "react"
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded"
import ErrorIcons from "@material-ui/icons/Error"
import { motion } from "framer-motion"

const Modal = ({ modalContent, closeModal, modalType }) => {
  useEffect(() => {
    setTimeout(() => closeModal(), 2000)
  })
  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      }}
    >
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
        <div className='modal-add-item-container'>
          <p>{modalContent}</p>
          <CheckCircleRoundedIcon />
        </div>
      )}
    </motion.div>
  )
}

export default Modal
