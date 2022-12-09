import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../../../Others/Context/ContentContext";
import SlobyValidate from "../../libraries/SlobyValidate";
import { AdminPageErrorMessages } from "../../utils/constans";
import { useAuth } from "../../utils/hooks";
import ErrorPage from "../../utils/pages/ErrorPage";
import {
  AdminPageContainer,
  AdminPageFormContainer,
  AdminPageSignInContainer,
  AdminPageTitle,
  SlobyErrorMessage,
  SubmitButton,
} from "../../utils/styles/AdminPage";
import { SlobyInput } from "../../utils/styles/global";

type TValidateInitalState = {
  username: string;
  password: string;
};

export const validateInitalState: TValidateInitalState = {
  username: "",
  password: "",
};

const slobyError = "";

function AdminPage() {
  const isUserHavePermission = useAuth();
  const { admin_page } = useContext(ContentContext);
  const adminPageForm = new SlobyValidate(validateInitalState);
  const navigate = useNavigate();

  return isUserHavePermission ? (
    <AdminPageContainer>
      {admin_page && isUserHavePermission ? (
        <AdminPageSignInContainer>
          <AdminPageTitle>Log In</AdminPageTitle>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              if (!adminPageForm.submit(e, "username>10password>6")) return false;
              navigate("/admin/dashboard");
            }}
          >
            <AdminPageFormContainer>
              <SlobyInput
                placeholder={"username..."}
                type={"text"}
                value={adminPageForm.inputs.username}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: React.FormEvent<HTMLFormElement> | any) => adminPageForm.handleChange(e)}
                name={"username"}
              />
              <SlobyInput
                placeholder={"password..."}
                type={"password"}
                value={adminPageForm.inputs.password}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: React.FormEvent<HTMLFormElement> | any) => adminPageForm.handleChange(e)}
                name={"password"}
              />
              <SlobyErrorMessage>{slobyError}</SlobyErrorMessage>
              <SubmitButton type="submit">Submit</SubmitButton>
            </AdminPageFormContainer>
          </form>
        </AdminPageSignInContainer>
      ) : null}
    </AdminPageContainer>
  ) : (
    <ErrorPage errorMessage={AdminPageErrorMessages.USER_DONT_HAVE_PERMISSION} />
  );
}

export default AdminPage;
