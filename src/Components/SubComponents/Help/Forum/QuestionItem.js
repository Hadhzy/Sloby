import React from "react"

export default function QuestionItem({ question_item, dispatch }) {
  return (
    <div className='filtered-items-container'>
      <div className='title'>
        <h2>{question_item.forumTitle} </h2>
      </div>
      <div className='description'>{question_item.forumDesc}</div>
      <div
        className='button'
        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: question_item.id })}
      >
        remove
      </div>
    </div>
  )
}
