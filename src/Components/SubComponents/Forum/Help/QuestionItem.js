import React from "react"

export default function QuestionItem({ setting, dispatch }) {
  return (
      <div>
         <div className="title"><h2>{setting.settingsTitle} </h2></div>
         <div className="description">{setting.settingsDesc}</div>
         <div className="button" onClick={() => dispatch({type: "REMOVE_ITEM", payload: setting.id})}>remove</div>
      </div>   
  )
}
