import React, { useEffect, useContext, useState } from 'react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { checkUserProjectPerms } from '../../utils/helpers';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import SlobyEditor from '../../sloby-editor-system/implementations/SlobyEditor';
import { useRouter } from 'next/router';

const Editor = () => {
  const session = useSession();
  const [succes, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = useSupabaseClient();

  useEffect(() => {
    console.log('Validation permissions...');
    checkUserProjectPerms(
      router.query.id as string,
      session,
      supabase,
      setSuccess
    );
  });

  return (
    <div>
      {succes ? (
        <SlobyEditor />
      ) : (
        <div className="bg-black h-screen  text-red-600 flex justify-center items-center text-2xl font-bold">
          You do not have access to this project
        </div>
      )}
    </div>
  );
};

export default Editor;
