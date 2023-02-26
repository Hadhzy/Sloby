import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';

export default function Test() {
  const supabase: any = useSupabaseClient();

  // hi :)
  useEffect(() => {
    async function test() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const otherUser = '01b84a74-0b79-4a3d-a86e-ed916ef376cb';
      const otherProject = 'c44a19b1-9dcb-4e91-81c9-bc0582924247';
      const myProject = 'a26be001-4d7a-40b2-8f7e-1cb82800eafb';

      const { data, error } = await supabase.from('users_projects').insert(
        {
          user_id: otherUser,
          project_id: otherProject,
        },
        []
      );

      // const { data, error } = await supabase.from('users_projects').insert({
      //   user_id: user.id,
      //   project_id: myProject,
      // });

      // const { data, error } = await supabase.from('users_projects').insert({
      //   user_id: otherUser,
      //   project_id: myProject,
      // });

      if (error) {
        console.error(error);
        return;
      }

      console.log(data);
    }
    test();
  });
}
