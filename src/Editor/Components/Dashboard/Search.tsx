import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import {
  IconContainer,
  Searchbar,
  SlobySearchContainer,
  SlobySearchWindow,
  SlobySearchWindowContainer,
} from "../../utils/styles/Dashboard";

function Search() {
  return (
    <SlobySearchWindowContainer as={motion.div} animate={{ y: [-100, 0] }} transition={{ duration: 0.5 }}>
      <SlobySearchWindow>
        <SlobySearchContainer>
          <IconContainer>
            <FaSearch className="sloby-icon search" />
          </IconContainer>
          <Searchbar placeholder="Search.." />
        </SlobySearchContainer>
      </SlobySearchWindow>
    </SlobySearchWindowContainer>
  );
}

export default Search;
