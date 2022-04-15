import React, {useContext} from "react"
import useStyles from "./styles"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import {ThemeContext} from "../Components/Context/ThemeContext"
function IntroductionSection() {
  const {theme} = useContext(ThemeContext)
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
            Visual Web-development
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            If you are a beginner with webdevelopment or you want to improve
            your skills this is the best choice to you our program is teachs
            webdevelopment
          </Typography>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <button className='button'>Get Starteds</button>
              </Grid>
              <Grid item>
                <button className='button'>Read Our DOCS</button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      </div>


  )
}

export default IntroductionSection
