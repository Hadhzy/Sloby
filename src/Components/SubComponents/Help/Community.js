import React, {useContext} from 'react';
import {ThemeContext} from "../../Context/ThemeContext"
import { motion } from "framer-motion"

const containerVariants = {
init: {
y: -700,
},
animate: {
y: 0,
transition: {
  delay: 1,
  duration: 0.2,
  type: "spring",
  stiffness: 400,
},
},
}
function Community(props) {
    const {theme} = useContext(ThemeContext)
    return (
      <div data_theme={theme}>
        <div className="community-container">
             <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="title-base">
                  Community
             </motion.div>
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="underline bigger-line"></motion.div>
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="subtitle-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facilis hic laborum, magni minus nam ullam? Animi nisi rem totam?
            </motion.div>
          </div>
        </div>
    );
}

export default Community;