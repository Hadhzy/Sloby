import React from 'react'
import { ProjectsHandler,ProjectContainer, IntegrationButton, Title, EmptyProjects,Description, Project, ProjectTitle,ProfilePicture, ProjectTitleContainer } from '../../utils/styles/Dashboard'
import Search from './Search'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { FaImages } from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { GiConsoleController } from 'react-icons/gi'
import { v4 as uuidv4 } from "uuid";

function Projects() {
  const dashboardSlice = useSelector((state: RootState) => state.dashboard)
  const navigate = useNavigate()
  const EmptyProject = () => {
    return <EmptyProjects>
      <FaImages className="large-icon"/>
      <Description>You have no projects to show, let's create one.</Description>
    </EmptyProjects>
  }

  const handleProjectOpening = (navigate: Function) => {
    console.log("Inside of opening a project")
    return navigate(`/editor/workspace/${uuidv4()}`)
  }

  return (
    <>
      <Search />
      <ProjectsHandler>
        <Title>Your Projects</Title>
        <ProjectContainer>
          {dashboardSlice.projects.length === 0 ? <EmptyProject /> : (
            <>
              {dashboardSlice.projects.map((item: any, index: number) => {
                return <Project key={index} onClick={() => handleProjectOpening(navigate)}>
                  <IntegrationButton> <BsThreeDotsVertical className='integration-button-icon'/>  </IntegrationButton>
                  <ProfilePicture />
                  <ProjectTitleContainer>
                    <ProjectTitle>{item.projectName}</ProjectTitle>
                  </ProjectTitleContainer>
                </Project>
              })}
            </>
          )}
        </ProjectContainer>
      </ProjectsHandler>
    </>
  )
}

export default Projects