import { Container, Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContentContext } from "./Context/ContentContext";

function IntroductionSection() {
  // const { theme } = useContext(ThemeContext);
  const { site_info } = useContext(ContentContext);

  return (
    <div>
      <div className="introduction-section">
        <Container maxWidth="sm" className="section-color">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            {site_info.title}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {site_info.sub_title}
          </Typography>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Link to="/editor/dashboard">
                  <button className="button">{site_info.button_title_get_started}</button>
                </Link>
              </Grid>
              <Grid item>
                <button className="button">{site_info.button_title_docs}</button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default IntroductionSection;
