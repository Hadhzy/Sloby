import React, { useContext, useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import ElementModifier from '../../../../sloby-editor-system/implementations/html_rendering/ElementModifier';
import { ProjectServices } from '../../../../api/project.api';
import ReactHtmlParser from 'react-html-parser';
import { TSlobyProject } from '../../../../utils/types';

export default function PreViewSite() {
  const [site, setSite] = React.useState<Array<TSlobyProject>>([]);
  const [sourceCode, setSourceCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(true); // add loading state
  const supabase = useSupabaseClient();
  const router = useRouter();
  const transformator = new ElementModifier();

  const options = {
    decodeEntities: true,
    ignoreTags: ['script', 'style'],
    transform: (node: any, index: number) => {
      if (node.type === 'tag') {
        if (node.name === 'p') {
          const parsedStyle = JSON.parse(`${node.attribs.style}`);

          return (
            <p style={parsedStyle} key={index}>
              {node.children[0].data}
            </p>
          );
        }
        if (node.name === 'div') {
          const parsedStyle = JSON.parse(`${node.attribs.style}`);
          // return <div style={parsedStyle}>{node.children}</div>;
        }
      }
    },
  };

  useEffect(() => {
    async function fetchData() {
      //getting the data based on the project id
      const projectsServices = new ProjectServices(supabase);
      let data = await projectsServices.getProjectsSource(
        router.query.id as string
      );

      if (data) {
        //mapping through the data and transforming it to html using the transformator instance
        data.data?.interface_source.map((item: any) => {
          let source = transformator.inputToParagraph(item);
          console.log(source);
          setSourceCode((prev: string) => prev + source);
        });
        setIsLoading(false); // set loading state to false after data is fetched
      }
    }

    fetchData();
  }, [router.query.id]);

  if (isLoading) {
    return <div>Loading...</div>; // render loading state
  }

  return (
    <div className="bg-interface-bg w-screen h-screen">
      <div>{ReactHtmlParser(sourceCode, options)}</div>
    </div>
  );
}
