import React from 'react';
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

function GoalContent(props) {
    return (
        <div className="goal-content-container">
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="title-base">Goal</motion.div>
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="underline bigger-line"></motion.div>
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="subtitle-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolores fugit magni nihil omnis placeat similique totam. Ab et, ullam.</motion.div>
        </div>
    );
}

export default GoalContent;