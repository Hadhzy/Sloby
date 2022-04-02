import React from "react"
import { motion } from "framer-motion"
function Content() {

  return (
    <motion.div className='content-container'
    initial={{ y: -150 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1,
            duration: 0.2,
            type: "spring",
            stiffness: 400,
          }}
    >
        <div className="main-text">
            This is just a simple content!d
        </div>

    </motion.div>
  )

}

export default Content
