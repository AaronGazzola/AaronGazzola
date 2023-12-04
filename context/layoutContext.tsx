"use client";
import { ReactNode, createContext, useState } from "react";

export const LayoutContext = createContext<{
  bgIsLoaded: boolean;
  onBgLoad: () => void;
}>({
  bgIsLoaded: false,
  onBgLoad: () => {},
});

export const LayoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bgIsLoaded, setBgIsLoaded] = useState(false);
  const onBgLoadVar = () => setBgIsLoaded(true);
  return (
    <LayoutContext.Provider
      value={{
        bgIsLoaded,
        onBgLoad: onBgLoadVar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
