import React, { useContext } from 'react';
import SlobyTable from '../../libraries/slobyTable/SlobyTable';
import {useAuth} from "../../Custom/CustomHooks"
import ErrorPage from '../../Custom/CustomPages/ErrorPage';
import { AdminPageContainer, AdminPageFormContainer, AdminPageTitle, SubmitButton } from '../../styles/AdminPage';
import { SlobyInput} from '../../styles/global';
import { ContentContext } from '../../../Components/Others/Context/ContentContext';
import {IAdminPage, IAdminPageForm } from "../../../Components/Others/types"
import { AdminPageErrorMessages } from '../../store/ErrorMessages';

function AdminPage() {
    const isUserHavePermission = useAuth()
    const {admin_page} = useContext(ContentContext)
    
    return isUserHavePermission ? (
        <AdminPageContainer>
            {admin_page && isUserHavePermission ? (
                <AdminPageFormContainer>
                    <AdminPageTitle>Sign In</AdminPageTitle>
                    {
                        admin_page.forms?.map((item: IAdminPageForm) => {
                            return <form>
                                <SlobyInput key={item.id} placeholder={item.placeholder} />
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