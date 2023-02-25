import React, { useContext, useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import ElementModifier from '../../../../sloby-editor-system/implementations/html_rendering/ElementModifier';
import { ProjectServices } from '../../../../api/project.api';
import ReactHtmlParser from 'react-html-parser';
import { TSlobyProject } from '../../../../utils/types';
import Link from 'next/link';
import { InputsContext } from '../../../../utils/contexts/Inputs';
import styleParser from 'style-parser';

export default function PreViewSite() {
  const [site, setSite] = React.useState<Array<TSlobyProject>>([]);
  const [sourceCode, setSourceCode] = React.useState<string>('');
  const supabase = useSupabaseClient();
  const router = useRouter();
  const transformator = new ElementModifier();

  const options = {
    decodeEntities: true,
    ignoreTags: ['script', 'style'],
    // transform: (node: any, index: number) => {
    //   if (node.type === 'tag' && node.name === 'p') {
    //     const parsedStyle = styleParser(node.attribs.style);

    //     return (
    //       <p style={parsedStyle} key={index}>
    //         {node.children[0].data}
    //       </p>
    //     );
    //   }
    // },
  };

  useEffect(() => {
    async function fetchData() {
      const projectsServices = new ProjectServices(supabase);
      let data = await projectsServices.getProjectsSource(
        router.query.id as string
      );
      if (data) {
        data.data?.interface_source.map((item: any) => {
          let source = transformator.inputToParagraph(item);
          setSourceCode((prev: string) => prev + source);
        });
      }
    }

    fetchData();
  }, [router.query.id]);

  return (
    <div className="bg-interface-bg w-screen h-screen">
      <div>{ReactHtmlParser(sourceCode, options)}</div>
    </div>
  );
}
