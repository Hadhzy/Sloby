import { Dispatch, SetStateAction, createContext, useState } from "react";

type LoadingContext = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContext>(undefined!);

export const LoadingContextProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
