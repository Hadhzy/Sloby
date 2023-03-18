import { EditorContext } from "./contexts/Editor";
import { useContext, useEffect } from "react";

export default function SlobyListener() {
  const { data } = useContext(
    EditorContext
  );

  // 500 ms debounce
  useEffect(() => {
    const getData = setTimeout(() => {
      console.log("data", data)
    }, 500)

    return () => clearTimeout(getData)
  }, [data]);

  return (
    <></>
  ) ;
}
