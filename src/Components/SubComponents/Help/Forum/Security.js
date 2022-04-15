import React, { useState } from "react"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { motion } from "framer-motion"

function Security({ dispatch, question_item }) {
  const [visible, setVisible] = useState(true)
  return <div>{visible && <SecurityContent />}</div>

  function SecurityContent() {
    return (
      <div className='security-container'>
        <motion.div
          className='security-popup-container'
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          translation={{ duration: 0.8 }}
        >
          <div className='security-question'>
            <Container maxWidth='sm'>
              <Typography
                variant='h3'
                align='center'
                gutterBottom
                color='textPrimary'
              >
                Security
              </Typography>
              <Typography
                variant='h5'
                align='center'
                paragraph
                color='textSecondary'
              >
                Are you sure, that you are want to save that question?
              </Typography>
            </Container>
            <hr />
          </div>
          <Grid container spacing={2} className='security-button-wrapper'>
            <Grid item>
              <button
                className='button'
                onClick={() =>
                  dispatch({ type: "SECURITY_MODAL" }) && setVisible(false)
                }
              >
                Yes, i am
              </button>
            </Grid>
            <Grid item>
              <button
                className='button'
                onClick={() => {
                  dispatch({
                    type: "DISCARD_ITEM",
                    payload: question_item.id,
                  }) && setVisible(false)
                }}
              >
                No, i am not
              </button>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    )
  }
}

export default Security
