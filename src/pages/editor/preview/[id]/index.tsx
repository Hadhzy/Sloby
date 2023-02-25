import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import ElementModifier from '../../../../sloby-editor-system/implementations/html_rendering/ElementModifier';
import { ProjectServices } from '../../../../api/project.api';
import ReactHtmlParser from 'react-html-parser';
import { TSlobyProject } from '../../../../utils/types';

export default function PreViewSite() {
  const [site, setSite] = React.useState<Array<TSlobyProject>>([]);
  const [sourceCode, setSourceCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const supabase = useSupabaseClient();
  const router = useRouter();
  const transformator = new ElementModifier();

  const options = {
    decodeEntities: true,
    ignoreTags: ['script', 'style'],
  };

  useEffect(() => {
    async function getSite() {
      if (site && site.length > 0) {
        site.map((item: any) => {
          const html_sourceCode = transformator.inputToParagraph(item);
          setSourceCode((prev: string) => prev + html_sourceCode);
        });
      }
    }

    async function getDbStructure() {
      const res = new ProjectServices(supabase);
      let html = await res.getProjectsSource(router.query.id as string);
      if (html) {
        setSite(html.data?.interface_source);
      }
      setIsLoading(false);
    }

    setIsLoading(true);
    getDbStructure();
    getSite();
  }, [router.query.id]);

  useEffect(() => {
    if (sourceCode !== '') {
      setIsLoading(false);
    }
  }, [sourceCode]);

  return (
    <div className="bg-interface-bg w-screen h-screen">
      {isLoading ? (
        <div>Loading...</div>
      ) : sourceCode !== '' ? (
        <div> {ReactHtmlParser(sourceCode, options)}</div>
      ) : (
        ''
      )}
    </div>
  );
}
