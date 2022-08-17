import { useState, createContext, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const values = { score, setScore };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMain = () => useContext(MainContext);
