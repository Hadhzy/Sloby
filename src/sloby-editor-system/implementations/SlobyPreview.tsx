import { RefObject, useContext } from "react";
import { EditorContext } from "./contexts/Editor";

interface SlobyPreviewProps {
  boundingBox: RefObject<HTMLDivElement>;
}
export default function SlobyPreview({ boundingBox }: SlobyPreviewProps) {
  const { components, setCurrentlySelected } = useContext(EditorContext);
  return (
    <div ref={boundingBox} className="w-full h-full relative" onClick={() => setCurrentlySelected(null)}>
      {components.map((component: any) => {
        return component;
      })
      }
    </div>
  );
}
