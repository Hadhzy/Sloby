import React from 'react'
import {BiError} from "react-icons/bi"
import {Link} from "react-router-dom";
//This page is gonna be displayed whenever the user mistpyed something urls AND if the tpyed url doesn't exist then it will be visible


function Error() {
  return (
    <div className="error-page-container">
      <div className="error-icon">
       <BiError />
      </div>
      <div className="error-description">
        Error! This is the error page of the <span>slobyBulider app</span>, you might <span>mistyped</span> something in the url or you just typed a <span>non-existent</span> URL. If you don't know what the problem is then click here and go back to the home page. 
      </div>
        <Link to="/" className='home-link'>
          Go back to the home page
        </Link>
    </div>
  )
}
export default Error