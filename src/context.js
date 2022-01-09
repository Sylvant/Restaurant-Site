
import React, {useContext, useState} from 'react'

const AppContext=React.createContext()

const AppProvider = ({ children }) => {

  const [language, setLanguage]=useState('EN')

  return (
    <AppContext.Provider value={{language, setLanguage}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext=()=>useContext(AppContext);

export { AppContext, AppProvider};