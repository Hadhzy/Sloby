import React from "react"
import useStyles from "./styles"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { PhotoCamera } from "@material-ui/icons"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

function IntroductionSection() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"],
    },
  })
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Container maxWidth='sm'>
          <Typography
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Visual Webdevelopmentt
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
          <div className={classes.buttons}>
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
    </ThemeProvider>
  )
}

export default IntroductionSection
