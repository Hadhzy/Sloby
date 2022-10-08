import React, { useContext, useState } from 'react';
import SlobyTable from '../../libraries/slobyTable/SlobyTable';
import {useAuth} from "../../Custom/CustomHooks"
import ErrorPage from '../../Custom/CustomPages/ErrorPage';
import { AdminPageContainer, AdminPageSignInContainer, AdminPageTitle, SubmitButton, AdminPageFormContainer, SubmitButtonContainer } from '../../styles/AdminPage';
import { SlobyInput} from '../../styles/global';
import { ContentContext } from '../../../Components/Others/Context/ContentContext';
import {IAdminPage, IAdminPageForm } from "../../../Components/Others/types"
import { AdminPageErrorMessages } from '../../store/ErrorMessages';
import {SlobyValidate} from '../../libraries/SlobyValidate';
import { IEventType } from '../../types';

function AdminPage() {
    const isUserHavePermission = useAuth()
    const {admin_page} = useContext(ContentContext)
    const adminPageForm = new SlobyValidate(["username", "password"], [""])
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: IEventType) => {
        e.preventDefault()
        console.log("submitted form")
    }

    return isUserHavePermission ? (
        <AdminPageContainer>
            {admin_page && isUserHavePermission ? (
                <AdminPageSignInContainer>
                    <AdminPageTitle>Sign In</AdminPageTitle>
                    <AdminPageFormContainer onSubmit={handleSubmit}>
                        <SlobyInput
                            placeholder={"username..."}
                            type={"text"}
                            value={userName}
                            onChange={(e) => setUserName(e.currentTarget.value)}
                            name={"username"}
                        />
                        <SlobyInput
                            placeholder={"password..."}
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            name={"password"}
                        />
                    <SubmitButtonContainer>
                        <SubmitButton type='submit'>Submit</SubmitButton>
                    </SubmitButtonContainer>
                    </AdminPageFormContainer>
                </AdminPageSignInContainer>
            ) : null}
        </AdminPageContainer>
    ) : <ErrorPage errorMessage={AdminPageErrorMessages.USER_DONT_HAVE_PERMISSION} />
}

export default AdminPage;