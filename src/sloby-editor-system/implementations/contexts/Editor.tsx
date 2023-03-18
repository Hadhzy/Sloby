import { createContext, Dispatch, SetStateAction, useState } from "react";

type TEditorContext = {
  toolClicked: boolean;
  setToolClicked: Dispatch<SetStateAction<boolean>>;
  components: any;
  setComponents: Dispatch<SetStateAction<any>>;
  data: any;
  setData: Dispatch<SetStateAction<object>>;
  currentlySelected: any;
  setCurrentlySelected: Dispatch<SetStateAction<any>>;
};

export const EditorContext = createContext<TEditorContext>(undefined!);

export const EditorContextProvider = ({ children }: { children: any }) => {
  const [toolClicked, setToolClicked] = useState<boolean>(false);
  const [components, setComponents] = useState<any>([]);
  const [data, setData] = useState<object>([]);
  const [currentlySelected, setCurrentlySelected] = useState<any>(null);

  return (
    <EditorContext.Provider
      value={{
        toolClicked,
        setToolClicked,
        components,
        setComponents,
        data,
        setData,
        currentlySelected,
        setCurrentlySelected,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
