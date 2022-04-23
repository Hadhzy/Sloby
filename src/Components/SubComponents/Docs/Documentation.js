import React, {useContext} from 'react';
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
function Documentation(props) {
    return (
        <div className="documentation-container">
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="title-base">Docs</motion.div>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque ea esse, id ipsam iusto necessitatibus possimus sunt. Numquam.
            </motion.div>
        </div>
    );
}

export default Documentation;