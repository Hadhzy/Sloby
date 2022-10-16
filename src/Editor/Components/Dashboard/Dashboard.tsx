import React, { useContext, useState } from 'react';
import { ContentContext } from '../../../Components/Others/Context/ContentContext';
import { SlobyDashboard, UserDetails,UserName } from '../../styles/Dashboard';
import SlobyMenu from './SlobyMenu';

function Dashboard() {
    const { sloby_dashboard } = useContext(ContentContext)
    return (
    <SlobyDashboard>
        <SlobyMenu />
    </SlobyDashboard>
    )
}

export default Dashboard