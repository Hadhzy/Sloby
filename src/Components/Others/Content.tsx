import React, {useContext} from "react"
import { Typography } from "@material-ui/core"
import {motion} from  "framer-motion"
import IntroductionSection from "./IntroductionSection"
import {ThemeContext} from "./Context/ThemeContext"
import {ContentContext} from "./Context/ContentContext"

function Content() {
  const {switchTheme, theme} = useContext(ThemeContext)
  const {site_info} = useContext(ContentContext)
  return (
      <div>
        {site_info ? (
          <div className="theme-case-content">
          <motion.div className='content-container'
            initial={{ opacity:0}}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.2,
                    type: "spring"
                  }}
            >
              <motion.div className='hero-section-container'
              initial={{x: -500}}
              animate={{x: 0}}
              transition={{delay: 1, duration:0.8}}
              >
                <IntroductionSection />
                <div className='hero-section-item'>
                  <img src={site_info.img} alt='Image' />
                </div>
              </motion.div>
            </motion.div>
          </div>
        ): null}
      </div>

  )
}

export default Content
