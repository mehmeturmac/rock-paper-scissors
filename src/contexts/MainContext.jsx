import { useState, createContext, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [test, setTest] = useState();

  const values = { test, setTest };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMain = () => useContext(MainContext);
