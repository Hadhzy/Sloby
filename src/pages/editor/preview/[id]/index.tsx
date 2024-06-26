// the preview site(render the html based on the provided code thru editor)

import React, { useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { ProjectServices } from '../../../../api/project.api';
import { SlobyParser } from '../../../../sloby-editor-system/implementations/parser/SlobyParser';
export default function PreViewSite() {
  const [sourceCode, setSourceCode] = React.useState<any>([]); // This is the source code of the preview site but in a version of strings
  const [isLoading, setIsLoading] = React.useState<boolean>(true); // Determines that whether the fetch has succeeded and the data is ready to be rendered
  const supabase = useSupabaseClient(); // supabase client
  const router = useRouter(); // because of the query id
  const [update, setUpdate] = React.useState<boolean>(false); // represent a new project update

  supabase
    .channel('projects_table_change')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'projects',
        filter: `id=eq.${router.query.id}`,
      },
      onProjectUpdate
    )
    .subscribe();

  function onProjectUpdate(payload: any) {
    // trigger when the db is updated
    setUpdate(true);
  }

  async function fetchData() {
    //getting the data based on the project id

    const { data, error } = await supabase
      .from('projects')
      .select('interface_source')
      .eq('id', router.query.id)
      .single();

    if (data) {
      setSourceCode(data?.interface_source);
    }

    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(sourceCode);
  }, [sourceCode]);

  useEffect(() => {
    // call the fetchData after
    fetchData(); // call the featchData at the first render
  }, [router.query.id]);

  useEffect(() => {
    fetchData(); // call the fetchData
    setIsLoading(false); // set loading state to false after data is fetched
    setUpdate(false);
    setSourceCode('');
  }, [update]);

  if (isLoading) {
    return <div>Loading...</div>; // render loading state
  }

  return (
    // render the html(actual preview)
    <div className="bg-interface-bg w-screen h-screen relative">
      <div className="w-full h-full">
        {sourceCode ? SlobyParser(sourceCode) : ''}
      </div>
    </div>
  );
}
