import { EditorContext } from './contexts/Editor';
import { useContext, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function SlobyListener() {
  const { data } = useContext(EditorContext);
  const supabase = useSupabaseClient();

  // 500 ms debounce
  useEffect(() => {
    // Get project ID from URL
    const projectId =
      typeof window !== 'undefined'
        ? window.location.pathname.split('/')[2]
        : null;

    const getData = setTimeout(() => {
      updateData();
    }, 500);

    async function updateData() {
      const { error } = await supabase
        .from('projects')
        .update({ interface_source: data })
        .eq('id', projectId);
    }

    return () => clearTimeout(getData);
  }, [data]);

  return <></>;
}
