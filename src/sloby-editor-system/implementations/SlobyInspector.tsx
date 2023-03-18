import React, { useContext, useEffect, useState } from "react";
import { EditorContext } from "./contexts/Editor";
import NumberInput from "./inspector/NumberInput";

export default function SlobyInspector() {
  const { data, currentlySelected } = useContext(EditorContext);
  const [itemData, setItemData] = useState<any>(null);

  useEffect(() => {
    if (currentlySelected !== null) {
      setItemData(data[currentlySelected]);
    } else {
      setItemData(null);
    }
  }, [currentlySelected]);
  return (
    <div className="w-1/4 bg-tools-bg h-full">
      {itemData && (
        <div className="flex flex-col divide-y divide-dark-darker">
          <div className="flex flex-col p-4 gap-4">
            <p className={"text-sm font-bold"}>Positioning</p>
            <div className={"grid grid-cols-2 gap-8"}>
              <NumberInput startingNumber={itemData.position.x} callback={(value: number) => {
                setItemData((prev: any) => {
                  prev.position.x = value;
                  return { ...prev };
                });
              }}>
                <p className={"text-xs pr-2"}>X</p>
              </NumberInput>
              <NumberInput startingNumber={itemData.position.y} callback={(value: number) => {
                setItemData((prev: any) => {
                  prev.position.y = value;
                  return { ...prev };
                });
              }}>
                <p className={"text-xs pr-2"}>Y</p>
              </NumberInput>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
