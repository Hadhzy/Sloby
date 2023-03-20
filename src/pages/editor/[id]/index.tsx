import React from 'react';
import SlobyEditor from '../../../sloby-editor-system/implementations/SlobyEditor';
import { GetServerSideProps, NextPage } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ProjectServices } from '../../../api/project.api';

type Props = {
  success: boolean;
};
const Editor: NextPage<Props> = ({ success }) => {
  // const session = useSession();
  // const [success, setSuccess] = useState(false);
  // const router = useRouter();
  // const supabase = useSupabaseClient();

  // useEffect(() => {
  //   console.log('Validation permissions...');
  //   checkUserProjectPerms(
  //     router.query.id as string,
  //     session,
  //     supabase,
  //     setSuccess
  //   );
  // });

  return (
    <div>
      {success ? (
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  const projectServices = new ProjectServices(supabase);

  const success = true;

  // checkUserProjectPerms(
  //   router.query.id as string,
  //   session,
  //   supabase,
  //   setSuccess
  // );
  // if (!session)
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }

  return {
    props: {
      // initialSession: session,
      // user: session.user,
      success,
    },
  };
};
