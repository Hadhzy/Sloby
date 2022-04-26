import React, {useContext} from 'react';
import { Link } from "react-router-dom"
import EmailIcon from '@material-ui/icons/Email';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import {ThemeContext} from "../../../Context/ThemeContext";
import { motion } from "framer-motion"
import {ContentContext} from "../../../Context/ContentContext";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    const {help_content} = useContext(ContentContext)
    return (
        <div data_theme={theme}>
           <div className="help-container">
            <motion.div
                variants={containerVariants}
                initial='init'
                animate='animate'
                className="title-base">
                {help_content.base_info.title}
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
                {help_content.base_info.description}
            </motion.div>

            <motion.div
               variants={containerVariants}
                initial='init'
                animate='animate'
                className="options">
               {help_content.infos.map(item => (
                <div>
                    <Link to={item.path} className="off-link-dec">
                       <i className={item.icon}></i>
                    <div className="bold-text user-select-none help-text">{item.title}</div>
                    </Link>
                </div>
               ))}
            </motion.div>

        </div>
        </div>

    );
}

export default HelpContent;