import React, {useContext} from 'react';
import { Link } from "react-router-dom"
import EmailIcon from '@material-ui/icons/Email';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import {ThemeContext} from "../../../Context/ThemeContext";
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


function HelpContent(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div data_theme={theme}>
           <div className="help-container">
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="title-base">
                Help
            </motion.div>

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolore ex, explicabo fuga iusto minus nostrum reiciendis rerum sint!
            </motion.div>

            <motion.div
               variants={containerVariants}
                initial='init'
                animate='animate'
                className="options">
                <div>
                    <Link to="forum" className="off-link-dec">
                    <ForumIcon className="icons" color="secondary"/>
                    <div className="bold-text user-select-none">Forum</div>
                    </Link>
                </div>

                <div>
                    <Link to="email" className="off-link-dec">
                    <EmailIcon className="icons" color="secondary"/>
                    <div className="bold-text user-select-none">Email</div>
                    </Link>
                </div>

                <div>
                    <Link to="community" className="off-link-dec">
                        <PeopleIcon  className="icons" color="secondary"/>
                        <div className="bold-text user-select-none">Community</div>
                    </Link>
                </div>
            </motion.div>

        </div>
        </div>

    );
}

export default HelpContent;