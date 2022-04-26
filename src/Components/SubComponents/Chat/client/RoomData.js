import React from "react"
import onlineIcon from "../../../../../src/icons/onlineIcon.png"
import {ContentContext} from "../../../Context/ContentContext";
import {useContext} from "react"


const RoomData = ({ users }) => {
    const {chat} = useContext(ContentContext)
        return(
            <div className='room-data-container'>
            {users ? (
              <div>
                <h1 className='title'>{chat.room_data.title}</h1>
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

}
export default RoomData
