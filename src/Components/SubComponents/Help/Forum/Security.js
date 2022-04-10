import React, { useState } from "react"
import { Typography, Button, Container, Grid } from "@material-ui/core"


function Security({ dispatch, question_item }) {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      {visible && <SecurityContent />}
    </div>
  )

  function SecurityContent() {
    return (
      <div className='security-container'>
        <div className="security-popup-container">

          <div className='security-question'>
              <Container maxWidth="sm">
                <Typography
                  variant="h3"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Security
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Are you sure, that you are want to save that item?
                </Typography>
              </Container>
            <hr/>
          </div>
           <Grid container spacing={2} className="security-button-wrapper">
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => setVisible(false)}>Yes, i am</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => {dispatch({type: "REMOVE_ITEM", payload: question_item.id}) && setVisible(false) }}>No, i am not</Button>
              </Grid>
            </Grid>
      </div>
    </div>
    )
  }
}

  

export default Security
