import React, {useContext} from "react"
import useStyles from "./styles"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import {ThemeContext} from "../Components/Context/ThemeContext"
import {ContentContext} from "../Components/Context/ContentContext"
import {Link} from "react-router-dom"


function IntroductionSection() {
  const {theme} = useContext(ThemeContext)
  const {site_info} = useContext(ContentContext)

  
  

  return (
      <div data_theme={theme}>
        <div className="introduction-section">
        <Container maxWidth='sm' className="section-color">
          <Typography
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {site_info.title}
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
           {site_info.sub_title}
          </Typography>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Link to="/editor/dashboard">
                  <button className='button'>{site_info.button_title_get_started}</button>
                </Link>
              </Grid>
              <Grid item>
                <button className='button'>{site_info.button_title_docs}</button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      </div>


  )
}

export default IntroductionSection
