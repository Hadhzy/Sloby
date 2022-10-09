import React, { useContext, useState } from 'react';
import SlobyTable from '../../libraries/slobyTable/SlobyTable';
import {useAuth, useSlobyValidateChange} from "../../Custom/CustomHooks"
import ErrorPage from '../../Custom/CustomPages/ErrorPage';
import { AdminPageContainer, AdminPageSignInContainer, AdminPageTitle, SubmitButton, AdminPageFormContainer } from '../../styles/AdminPage';
import { SlobyInput} from '../../styles/global';
import { ContentContext } from '../../../Components/Others/Context/ContentContext';
import {IAdminPage, IAdminPageForm } from "../../../Components/Others/types"
import { AdminPageErrorMessages } from '../../store/ErrorMessages';
import SlobyValidate from '../../libraries/SlobyValidate';
import { IEventType } from '../../types';

let initalState = {
    username: "",
    password: "",
}

function AdminPage() {
    const isUserHavePermission = useAuth()
    const {admin_page} = useContext(ContentContext)
    const adminPageForm = new SlobyValidate(initalState)

    return isUserHavePermission ? (
        <AdminPageContainer>
            {admin_page && isUserHavePermission ? (
                <AdminPageSignInContainer>
                    <AdminPageTitle>Sign In</AdminPageTitle>
                    <form onSubmit={(e) => adminPageForm.submit(e, "username>10password>6")}>
                    <AdminPageFormContainer>
                            <SlobyInput
                                placeholder={"username..."}
                                type={"text"}
                                value={adminPageForm.inputs.username}
                                onChange={(e: IEventType) => adminPageForm.handleChange(e)}
                                name={"username"}
                            />
                            <SlobyInput
                                placeholder={"password..."}
                                type={"password"}
                                value={adminPageForm.inputs.password}
                                onChange={(e: IEventType) => adminPageForm.handleChange(e)}
                                name={"password"}
                            />
                                <SubmitButton type='submit'>Submit</SubmitButton>
                       </AdminPageFormContainer>
                    </form>
                </AdminPageSignInContainer>
            ) : null}
        </AdminPageContainer>
    ) : <ErrorPage errorMessage={AdminPageErrorMessages.USER_DONT_HAVE_PERMISSION} />
}

export default AdminPage;