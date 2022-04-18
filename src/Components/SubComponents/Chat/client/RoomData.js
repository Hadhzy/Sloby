import React from "react"
import onlineIcon from "../../../../../src/icons/onlineIcon.png"

const RoomData = ({ users }) => (
  <div className='room-data-container'>
    {users ? (
      <div>
        <h1 className='title'>People currently chatting</h1>
        <div className='active-container'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='active-item'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
)
export default RoomData
