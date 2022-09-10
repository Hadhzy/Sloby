import React from 'react'
import PreventUrls from '../libraries/globalHelper/preventUrls'
import {BiError} from "react-icons/bi"
import {Link} from "react-router-dom";
//This page is gonna be displayed whenever we or the user mistpye some urls AND if the tpyed url doesn't exist then it will be visible


function Error() {
  return (
    <div className="error-page-container">
      <div className="error-icon">
       <BiError />
      </div>
      <div className="error-description">
        Error! This is the error page of the slobyBulider app, you might mistyped something in the url or you just typed a non-existent URL. If you haven't know what the problem is then click here and go back to the home page. 
      </div>
        <Link to="/" className='home-link'>
          Go back to the home page
        </Link>
    </div>
  )
}

export default Error