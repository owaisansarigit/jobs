import React, { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const value = "123";

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
