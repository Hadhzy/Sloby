import React from "react"
import { FaSearch } from "react-icons/fa"
import { SlobySearchContainer, Searchbar, IconContainer, SlobySearchWindow, SlobySearchWindowContainer } from "../../utils/styles/Dashboard"
import { motion } from "framer-motion"
import {GrFormClose} from "react-icons/gr"



function Search() {
    return <SlobySearchWindowContainer as={motion.div} animate={{ y: [-100, 0] }} transition={{ duration: 0.5 }}>
        <SlobySearchWindow>
            <SlobySearchContainer>
            <IconContainer>
                <FaSearch className='sloby-icon search' />
            </IconContainer>
            <Searchbar
                placeholder="Search.."
            />
        </SlobySearchContainer>
        </SlobySearchWindow>
    </SlobySearchWindowContainer>
}

export default Search