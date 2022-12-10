import { Button, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";

export function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { settings_menu_titles } = useContext(ContentContext);
  console.log(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.target ?? setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {settings_menu_titles ? (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e)}
          >
            <MoreVertIcon />
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link className="off-link-dec" to="settings">
                {settings_menu_titles.item_1}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>{settings_menu_titles.item_2}</MenuItem>
            <MenuItem onClick={handleClose}>{settings_menu_titles.item_3}</MenuItem>
          </Menu>
        </div>
      ) : null}
    </div>
  );
}
