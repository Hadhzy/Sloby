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
import { ToastContainer, toast } from "react-toastify"
import { Outlet } from 'react-router-dom';

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
        {
            dashboardSlice.shouldNotificationDisplay && <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                style={{ textAlign: "center" }}
            />
            }
            <Outlet />
  </SlobyDashboard>
    )
}

export default Dashboard