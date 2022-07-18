import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  isLocked: boolean;
  setIsLocked: (isLocked: boolean) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AppContext = createContext<Props>({} as any);

export const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isLocked,
        setIsLocked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default function useAppState() {
  return useContext(AppContext);
}
