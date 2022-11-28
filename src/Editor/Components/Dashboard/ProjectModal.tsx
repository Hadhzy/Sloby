import React from "react";
import {
  AdminPageContainer,
  AdminPageFormContainer,
  AdminPageSignInContainer,
  AdminPageTitle,
  SlobyErrorMessage,
  SubmitButton,
} from "../../utils/styles/AdminPage";
import {
  ProjectModalContainer,
  ModalContent,
  ModalTitle,
} from "../../utils/styles/Dashboard";
import { SlobyInput } from "../../utils/styles/global";
import { IEventType } from "../../utils/types";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  createProject,
  displayNotification,
  setError,
  setProjectModal,
  updateProjectDescription,
  updateProjectName,
} from "../../store/dashboard/dashboardSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ProjectModal() {
  const dispatch = useDispatch<AppDispatch>();
  const dashboardSlice = useSelector(
    (state: RootState) => state.projectDashboard
  );
  const notify = () => toast.success("You have successfully crated a project");

  const handleClick = (e: any) => {
    if (e.target.id !== "projectModalContainer") return;
    console.log("target is outside of the modal");
    dispatch(setProjectModal(false));
    console.log(dashboardSlice.projectName);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitting");
    if (
      dashboardSlice.projectDescription === "" ||
      dashboardSlice.projectName === ""
    )
      return dispatch(setError("Please fill the inputs"));
    dispatch(setError(""));
    dispatch(setProjectModal(false));
    dispatch(updateProjectName(""));
    dispatch(updateProjectDescription(""));
    const props = {
      projectName: dashboardSlice.projectName,
      projectDescription: dashboardSlice.projectDescription,
    };
    dispatch(createProject(props));
    dispatch(displayNotification(true));
    notify();
  };

  return (
    <ProjectModalContainer
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      id="projectModalContainer"
      onClick={(e: any) => handleClick(e)}
    >
      <AdminPageSignInContainer>
        <AdminPageTitle>New Project</AdminPageTitle>
        <form onSubmit={(e: any) => handleSubmit(e)}>
          <AdminPageFormContainer>
            <SlobyInput
              placeholder="project name"
              value={dashboardSlice.projectName}
              onChange={(e: any) => dispatch(updateProjectName(e.target.value))}
            />
            <SlobyInput
              placeholder="description"
              onChange={(e: any) =>
                dispatch(updateProjectDescription(e.target.value))
              }
              value={dashboardSlice.projectDescription}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </AdminPageFormContainer>
          <SlobyErrorMessage>{dashboardSlice.errorMessage}</SlobyErrorMessage>
        </form>
      </AdminPageSignInContainer>
    </ProjectModalContainer>
  );
}
export default ProjectModal;
