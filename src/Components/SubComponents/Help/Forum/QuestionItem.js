import React from "react"

export default function QuestionItem({ question_item, dispatch }) {
  return (
    <div className='question-item'>
      <div className="question-title-and-desc">
        <h4 className="question-title">{question_item.forumTitle}</h4>
        <p className="question-description">{question_item.forumDesc}</p>
      </div>
      <div className="question-item-events">
        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: question_item.id })}>
          remove
        </button>
      </div>
    </div>
  )
}