import React from 'react';
import {Link, Outlet} from "react-router-dom"
function User(props) {
    return (
        <div>
            User
            <Outlet/>
        </div>


    );
}

export default User;