import { Dispatch, SetStateAction, createContext, useState } from 'react';
type TToolClickedContext = {
  toolClicked: boolean;
  setToolClicked: (toolClicked: boolean) => void;
};

export const ToolClickedContext = createContext<TToolClickedContext>(
  undefined!
);

export const ToolClickedContextProvider = ({ children }: { children: any }) => {
  const [toolClicked, setToolClicked] = useState<boolean>(false);

  return (
    <ToolClickedContext.Provider
      value={{
        toolClicked,
        setToolClicked,
      }}
    >
      {children}
    </ToolClickedContext.Provider>
  );
};
