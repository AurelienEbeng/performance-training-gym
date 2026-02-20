import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(undefined);

export const LoadingProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <LoadingContext.Provider value={{ isDisabled, toggleDisable }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoadingContext must be used within a Provider");
  }
  return context;
};
