
import React, {useContext, useState, useReducer, useCallback} from 'react'
import submenuReducer from './submenuReducer'

const SubmenuContext=React.createContext()

const SubmenuProvider=({children})=>{

  const [submenu, dispatch]=useReducer(submenuReducer, null)
  const [isWide, setIsWide]=useState(false)

  const swapIsWide=useCallback(isWide=>{
    setIsWide(isWide)
  }, [])

  const setSubmenu=useCallback((type, payload)=>{
    if (payload) dispatch({type, payload})
    else dispatch({type})
  }, [])

  return <SubmenuContext.Provider value={{submenu, setSubmenu, isWide, setIsWide, swapIsWide}}>
      {children}
    </SubmenuContext.Provider>
}

export const useSubmenuContext=()=>useContext(SubmenuContext)

export { SubmenuContext, SubmenuProvider }