import React, { useContext, useState } from 'react';
import SlobyTable from '../../libraries/slobyTable/SlobyTable';
import {useAuth} from "../../Custom/CustomHooks"
import ErrorPage from '../../Custom/CustomPages/ErrorPage';
import { AdminPageContainer, AdminPageSignInContainer, AdminPageTitle, SubmitButton, AdminPageFormContainer, SlobyErrorMessage } from '../../styles/AdminPage';
import { SlobyInput} from '../../styles/global';
import { ContentContext } from '../../../Components/Others/Context/ContentContext';
import {IAdminPage, IAdminPageForm } from "../../../Components/Others/types"
import { AdminPageErrorMessages } from '../../store/ErrorMessages';
import SlobyValidate from '../../libraries/SlobyValidate';
import { IEventType } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux';
import { Navigate, useNavigate } from 'react-router-dom';



let initalState = {
    username: "",
    password: "",
}

let slobyError = ""
console.log(slobyError)



function AdminPage() {
    const isUserHavePermission = useAuth()
    const { admin_page } = useContext(ContentContext)
    const adminPageForm = new SlobyValidate(initalState)
    const validateSlice = useSelector((state: RootState) => state.validateError)
    const navigate = useNavigate()

    return isUserHavePermission ? (
        <AdminPageContainer>
            {admin_page && isUserHavePermission ? (
                <AdminPageSignInContainer>
                    <AdminPageTitle>Log In</AdminPageTitle>
                    <form onSubmit={(e) => {
                        if (!adminPageForm.submit(e, "username>10password>6")) return false
                        navigate("/admin/dashboard")
                    }}>
                    <AdminPageFormContainer>
                            <SlobyInput
                                placeholder={"username..."}
                                type={"text"}
                                value={adminPageForm.inputs.username}
                                onChange={(e: IEventType) => adminPageForm.handleChange(e,)}
                                name={"username"}
                            />
                            <SlobyInput
                                placeholder={"password..."}
                                type={"password"}
                                value={adminPageForm.inputs.password}
                                onChange={(e: IEventType) => adminPageForm.handleChange(e)}
                                name={"password"}
                            />
                            <SlobyErrorMessage>{slobyError}</SlobyErrorMessage>
                                <SubmitButton type='submit'>Submit</SubmitButton>
                       </AdminPageFormContainer>
                    </form>
                </AdminPageSignInContainer>
            ) : null}
        </AdminPageContainer>
    ) : <ErrorPage errorMessage={AdminPageErrorMessages.USER_DONT_HAVE_PERMISSION} />
}

export default AdminPage;


