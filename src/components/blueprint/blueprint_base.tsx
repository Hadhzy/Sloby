import React from "react";
import BluePrintObject from "./blueprint_block";
import {BluePrintContext} from "../../utils/contexts/BluePrint";


function BluePrintMenu(){
    const {setElements, addBluePrintElement } = React.useContext(BluePrintContext);


    return (
        <nav className=" sticky top-0 z-50 flex items-center justify-between flex-wrap from-indigo-500 bg-teal-500 bg-gradient-to-r from-indigo-500  p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">

                <span className="font-semibold text-xl tracking-tight select-none">Sloby BluePrint</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="flex justify-start w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="mx-4 font-bold select-none " onClick={() => addBluePrintElement(
                        {
                            name: "1",
                            color: "red",
                            output: false
                        }
                    )}>
                        Add
                    </div>
                      <div className="mx-4 font-bold select-none " onClick={() => setElements([])}>
                          Restart
                      </div>

                </div>

        </nav>

    )
}

class BaseBluePrint extends React.Component {
      /**
       * This component is used to be the blueprint page on the editor/blueprint route.
       -------------------------------
       */
      constructor(props: any = "") {
        super(props);
      }

  render() {
      const { elements } = React.useContext(BluePrintContext);
    return (
        <div>
            <BluePrintMenu />
            <div className=" bg-gray-900 bg-gradient-to-t from-gray-700 to-gray-900 bg-no-repeat bg-cover">
                {elements.map((element: any) => {
                    return(
                        <BluePrintObject name={element.name} color={element.color} output={element.output} />
                    )
                })}
        </div>
     </div>

    );
  }
}

export default BaseBluePrint;