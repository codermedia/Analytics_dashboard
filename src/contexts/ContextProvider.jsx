import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [isProfileActive, setProfileActive] = useState(false);
  const [apiData, setApiData] = useState({});

  return (
    <StateContext.Provider
      value={({ isProfileActive, setProfileActive }, { apiData, setApiData })}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
