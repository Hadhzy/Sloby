import React, { useContext, useState } from 'react';
import { ContentContext } from '../../../Others/Context/ContentContext';
import { SlobyDashboard, UserDetails,UserName, NewProjectButton } from '../../utils/styles/Dashboard';
import SlobyMenu from './SlobyMenu';
// import { useDispatch } from "react-redux"
// import { AppDispatch } from "../../store/redux"
// import { setSearchbar } from "../../store/redux/dashboard/dashboardSlice"
import { useSelector } from "react-redux"
import { RootState } from '../../store';
import Search from './Search';
import ProjectModal from './ProjectModal';

function Dashboard() {
    const dashboardSlice = useSelector((state: RootState) => {
        console.log(state)
        return state.dashboard
    })

    return (
    <SlobyDashboard>
        <SlobyMenu />
        {dashboardSlice.search && <Search />}
        {dashboardSlice.projectModal && <ProjectModal />}
    </SlobyDashboard>
    )
}

export default Dashboard