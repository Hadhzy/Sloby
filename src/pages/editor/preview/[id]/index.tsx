// the preview site(render the html based on the provided code thru editor)

import React, { useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import ElementModifier from '../../../../sloby-editor-system/implementations/html_rendering/ElementModifier';
import { ProjectServices } from '../../../../api/project.api';
import ReactHtmlParser from 'react-html-parser';

export default function PreViewSite() {
  const [sourceCode, setSourceCode] = React.useState<string>(''); // This is the source code of the preview site but in a version of strings
  const [isLoading, setIsLoading] = React.useState<boolean>(true); // Determines that whether the fetch has succeeded and the data is ready to be rendered
  const supabase = useSupabaseClient(); // supabase client
  const router = useRouter(); // because of the query id
  const transformator = new ElementModifier(); // create a modifier instance

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

          // mapping through the children of the div node and using the SAME logic to render the paragraph
          const children = node.children.map(
            (childNode: any, childIndex: number) => {
              // represent a child and act just as SAME as before
              if (childNode.type === 'tag' && childNode.name === 'p') {
                const parsedChildStyle = JSON.parse(
                  `${childNode.attribs.style}`
                );
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
            <div style={styleWithPixelValues} key={index}>
              {children}
            </div>
          );
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
        //mapping through the data and transforming it to html using the transformator.inputToParagraph method

        data.data?.interface_source.map((item: any) => {
          let source = transformator.inputToParagraph(item);
          setSourceCode((prev: string) => prev + source); // '<p><p/>'
        });

        setIsLoading(false); // set loading state to false after data is fetched
      }
    }

    fetchData(); // call the fetchData
  }, [router.query.id]);

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
