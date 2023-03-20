import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';

export default function Test() {
  const supabase: any = useSupabaseClient();

  // hi :)
  useEffect(() => {
    async function test() {
      // Get all projects
      const { data, error } = await supabase.from('projects').select('*');

      if (error) {
        console.error(error);
        return;
      }

    }
    test();
  }, []);
}
