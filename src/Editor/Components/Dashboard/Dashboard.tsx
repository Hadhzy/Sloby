import React, { useContext, useState } from 'react';
import { ContentContext } from '../../../Others/Context/ContentContext';
import { SlobyDashboard, UserDetails,UserName } from '../../styles/Dashboard';
import SlobyMenu from './SlobyMenu';
// import { useDispatch } from "react-redux"
// import { AppDispatch } from "../../store/redux"
// import { setSearchbar } from "../../store/redux/dashboard/dashboardSlice"
import { useSelector } from "react-redux"
import { RootState } from '../../store/redux';
import Search from './Search';

function Dashboard() {
    const dashboardSlice = useSelector((state: RootState) => {
        console.log(state)
        return state.dashboard
    })

    return (
    <SlobyDashboard>
        <SlobyMenu />
        {dashboardSlice.search && <Search />}
    </SlobyDashboard>
    )
}

export default Dashboard