import { EditorContext } from "./contexts/Editor";
import { useContext, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function SlobyListener() {
  const { data } = useContext(
    EditorContext
  );
  const supabase = useSupabaseClient();
  // Get project ID from URL
  const projectId = window.location.pathname.split("/")[2];

  // 500 ms debounce
  useEffect(() => {
    const getData = setTimeout(() => {
      updateData();
    }, 500)

    async function updateData() {
      const {error} = await supabase
        .from("projects")
        .update({ interface_source: data })
        .eq("id", projectId);
    }

    return () => clearTimeout(getData)
  }, [data]);

  return (
    <></>
  ) ;
}
