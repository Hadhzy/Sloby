import React, {useContext} from 'react';
import { motion } from "framer-motion"
import { ContentContext } from '../Context/ContentContext';

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
function Documentation(props) {
    const {social_content} = useContext(ContentContext)
    return (
        <div className="documentation-container">
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="title-base">{social_content.docs.title}</motion.div>
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="underline"></motion.div>

            <motion.div
               variants={containerVariants}
                initial='init'
                animate='animate'
                className="subtitle-base">
                {social_content.docs.description}    
            </motion.div>
        </div>
    );
}

export default Documentation;