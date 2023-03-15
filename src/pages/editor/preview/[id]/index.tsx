// the preview site(render the html based on the provided code thru editor)

import React, { useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import ElementModifier from '../../../../sloby-editor-system/implementations/html_rendering/ElementModifier';
import { ProjectServices } from '../../../../api/project.api';
import ReactHtmlParser from '@hedgedoc/html-to-react';
import { motion } from 'framer-motion';
import SlobyParser from '../../../../sloby-editor-system/implementations/parser/SlobyParser';
export default function PreViewSite() {
  const [sourceCode, setSourceCode] = React.useState<string>(''); // This is the source code of the preview site but in a version of strings
  const [isLoading, setIsLoading] = React.useState<boolean>(true); // Determines that whether the fetch has succeeded and the data is ready to be rendered
  const supabase = useSupabaseClient(); // supabase client
  const router = useRouter(); // because of the query id
  const transformator = new ElementModifier(); // create a modifier instance
  const [update, setUpdate] = React.useState<boolean>(false); // represent a new project update

  if (router.query.id) {
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
  }

  function onProjectUpdate(payload: any) {
    // trigger when the db is updated
    setUpdate(true);
  }

  // Options for rendering the parser
  const options: any = {
    decodeEntities: true,
    ignoreTags: ['script', 'style'],

    transform: (node: any, index: number) => {
      // heart of the parser, the render based on this transform function.

      if (node.type === 'tag') {
        if (node.name === 'p') {
          // If the node is the paragraph
          const parsedStyle = JSON.parse(`${node.attribs.style}`); // parsing the style attribute to an actual object from a string

          //rendering the actual paragraph
          return (
            <p style={parsedStyle} key={index}>
              {node.children[0].data}
            </p>
          );
        }
        if (node.name === 'div') {
          // if there is an active div node

          const parsedStyleDiv = JSON.parse(`${node.attribs.style}`); // the base style attribute (defined: element modifier)

          // adding the position absolute and the top and left values to the style attribute
          const styleWithPixelValues = {
            ...parsedStyleDiv, // add the best style
            position: 'absolute', // extend the style with postion
            top: `${parsedStyleDiv.top}px`, // extend the style with postion
            left: `${parsedStyleDiv.left}px`, // extend the style with postion
          };

          // mapping through the chilqdren of the div node and using the SAME logic to render the paragraph
          const children = node.children.map(
            (childNode: any, childIndex: number) => {
              // represent a child and act just as SAME as before
              if (childNode.type === 'tag' && childNode.name === 'p') {
                const parsedChildStyle = JSON.parse(
                  `${childNode.attribs.style}`
                );
                console.log(parsedChildStyle);

                return (
                  <p style={parsedChildStyle} key={childIndex}>
                    {childNode.children[0].data}
                  </p>
                );

                //If there is not p tag then return null
              } else {
                return null;
              }
            }
          );

          //rendering the paragraph using the SAME logic as before
          return (
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
              style={styleWithPixelValues}
              key={index}
            >
              {children}
            </motion.div> // add fade effect
          );
        }
      }
    },
  };

  async function fetchData() {
    //getting the data based on the project id

    const projectsServices = new ProjectServices(supabase);

    const data = await projectsServices.getProjectsSource(
      // get the source code of the project
      router.query.id as string
    );
    if (data) {
      //mapping through the data and transforming it to html using the transformator.inputToParagraph method
      data?.interface_source.map((item: any) => {
        // don't update the whole source_code, just add the new one
        transformator.scanner(item);
        setSourceCode((prev: string) => prev + transformator.source_code); // '<p><p/>'
      });

      
    }
  }

  useEffect(() => {
    new SlobyParser(sourceCode);
  }, [sourceCode])

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
        {ReactHtmlParser(sourceCode, options)}
      </div>
    </div>
  );
}
