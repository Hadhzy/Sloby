import React, { useState } from "react"

function Security({ dispatch, question_item }) {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      {visible && <SecurityContent />}
    </div>
  )

  function SecurityContent() {
    return (
      <div className='security-popup-container'>
          <div className='security-question'>
            Are you sure that you are want to add that item?
          </div>
          <hr />
          <div className='security-button-wrapper'>
            <button onClick={() => setVisible(false)}>Yes, i am</button>
            <button onClick={() => {dispatch({type: "REMOVE_ITEM", payload: question_item.id}) && setVisible(false) }}>No, i am not</button>
          </div>
        </div>
    )
    }
}

  

export default Security
