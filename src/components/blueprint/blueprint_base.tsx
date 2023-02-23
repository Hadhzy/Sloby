import React from "react";
import BluePrintObject from "./blueprint_block";

class BaseBluePrint extends React.Component {
      /**
       * This component is used to be the blueprint page on the editor/blueprint route.
       -------------------------------
       */
      constructor(props: any) {
        super(props);
      }

  render() {
    return (
      <div className=" bg-gray-900 bg-gradient-to-t from-gray-700 to-gray-900 bg-no-repeat bg-cover">
        {Array.from({ length: 1 }, (_, i) => (
          <BluePrintObject name={"1"} color={"red"} output={false} />
        ))}
      </div>
    );
  }
}

export default BaseBluePrint;