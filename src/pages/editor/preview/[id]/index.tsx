import React, { useEffect } from 'react';
import { ProjectServices } from '../../../../api/project.api';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { TSlobyProject } from '../../../../utils/types';
import ElementModifier from '../../../../sloby-editor-system/implementations/html_rendering/ElementModifier';
import ReactHtmlParser from 'react-html-parser';

export default function PreViewSite() {
  const [site, setSite] = React.useState<Array<TSlobyProject>>([]);
  const [sourceCode, setSourceCode] = React.useState<string>('');
  const supabase = useSupabaseClient();
  const router = useRouter();
  const transformator = new ElementModifier();

  const options = {
    decodeEntities: true,
    ignoreTags: ['script', 'style'],
  };

  async function getSite() {
    const res = new ProjectServices(supabase);
    const html = await res.getProjectsSource(router.query.id as string);

    console.log(html.data?.interface_source);
    if (html.data?.interface_source) {
      setSite(html.data?.interface_source);

      // site.map((item: any) => {
      //   const html = transformator.inputToParagraph(item);
      //   setSourceCode(html);
      // });
    }
  }

  useEffect(() => {
    getSite();
  }, []);

  return (
    <div className="bg-interface-bg w-screen h-screen">
      {sourceCode !== '' ? (
        <div> {ReactHtmlParser(sourceCode, options)}</div>
      ) : (
        ''
      )}
    </div>
  );
}
