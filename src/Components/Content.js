import React from "react"
import Image from "../icons/Image.png"
import { Typography } from "@material-ui/core"
import {motion} from  "framer-motion"
import IntroductionSection from "./IntroductionSection"

function Content() {
  return (
    <motion.div className='content-container'
    initial={{ opacity:0}}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.2,
            type: "spring"
          }}
    >
      <div className='hero-section-container'>
        <IntroductionSection />
        <div className='hero-section-item'>
          <img src={Image} alt='Image' />
        </div>
      </div>
    </motion.div>
  )
}

export default Content
