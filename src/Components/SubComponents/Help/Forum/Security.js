import React, { useState, useContext } from "react"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { motion } from "framer-motion"
import { ContentContext } from "../../../Context/ContentContext"


function Security({ dispatch, question_item }) {
  const [visible, setVisible] = useState(true)
  const {forum_and_security} = useContext(ContentContext)

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
                {forum_and_security.security_title}
              </Typography>
              <Typography
                variant='h5'
                align='center'
                paragraph
                color='textSecondary'
              >
                {forum_and_security.security_description}
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
                {forum_and_security.security_option_1}
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
                {forum_and_security.security_option_2}
              </button>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    )
  }
}

export default Security
