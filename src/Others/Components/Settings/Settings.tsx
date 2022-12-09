/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { ContentContext } from "../../Context/ContentContext";

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Settings() {
  const { settings } = useContext(ContentContext);
  const [expanded, setExpanded] = useState(new Array(settings?.length).fill(true));
  console.log(expanded);
  const handleOnchange = (position: any) => {
    const updatedCheckedState = expanded.map((item, index) => (index === position ? !item : item));
    setExpanded(updatedCheckedState);
  };

  // const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className="settings-container">
        <div className="title">Settings</div>
        <div className="underline"></div>
        <div className="options">
          <div className="settings-item">
            {settings ? (
              <>
                {settings.map((setting: any, index: number) => (
                  <div key={index}>
                    <Card className="setting-item" sx={{ width: 1000 }}>
                      <CardHeader
                        className="card-header"
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={setting.title}
                        subheader={setting.subheader}
                      />
                      <CardContent>
                        <Typography>{setting.description}</Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        {/* {
                      setting.type === "switch" && (
                          // <FormControlLabel control={
                          //    <Switch checked={theme === "light"? false : true} onChange={switchTheme}>
                          //   click to change the theme
                          // </Switch>
                          // } label={`${theme} theme`}>

                          // </FormControlLabel>)
                    } */}

                        <ExpandMore
                          expand={expanded}
                          onClick={() => handleOnchange(index)}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>{setting.content_title}</Typography>
                          <Typography paragraph>{setting.long_description}</Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
