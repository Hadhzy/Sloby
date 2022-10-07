import React, { useContext } from 'react';
import SlobyTable from '../../libraries/slobyTable/SlobyTable';
import {useAuth} from "../../Custom/CustomHooks"
import ErrorPage from '../../Custom/CustomPages/ErrorPage';
import { AdminPageContainer, AdminPageFormContainer, AdminPageTitle, SubmitButton } from '../../styles/AdminPage';
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

    console.log(adminPageForm.manageInputValues())

    return isUserHavePermission ? (
        <AdminPageContainer>
            {admin_page && isUserHavePermission ? (
                <AdminPageFormContainer>
                    <AdminPageTitle>Sign In</AdminPageTitle>
                    {
                        admin_page.forms?.map((item: IAdminPageForm) => {
                            return <form key={item.id}>
                                <SlobyInput
                                    placeholder={item.placeholder}
                                    type={item.type}
                                    value={""}
                                    onChange={(e) => adminPageForm.handleChange(e)}
                                    name={adminPageForm.state.inputNames.forEach((item: string) => {return item})}
                                />
                            </form>
                       })
                    }
                    <SubmitButton>Submit</SubmitButton>
                </AdminPageFormContainer>
            ) : null}
        </AdminPageContainer>
    ) : <ErrorPage errorMessage={AdminPageErrorMessages.USER_DONT_HAVE_PERMISSION} />
}

export default AdminPage;