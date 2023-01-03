import React, {useEffect, useContext, useState} from 'react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { checkUserProjectPerms } from '../../utils/helpers';
import { useSession } from '@supabase/auth-helpers-react';


const Editor = () => {
  const {currentClickedProject} = useContext(ProjectsContext)
  const session = useSession()
  const [succes, setSuccess] = useState(false)

  useEffect(() => {
    const doesUserHavePerm =  checkUserProjectPerms(currentClickedProject, session)
    if(doesUserHavePerm) return setSuccess(true)
    else return setSuccess(false)
  }, [currentClickedProject, session])

  return <div>
    {succes ? (
      <div>You have access</div>
    ): <div>You do not have access to open this project</div>}
  </div>
}


export default Editor