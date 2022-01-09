

import React, {useContext, useState, useCallback} from 'react'

const TooltipContext=React.createContext()

const TooltipProvider=({children})=>{

  const [tooltip, setTooltip]=useState(false)

  const swapTooltip=useCallback(isShown=>setTooltip(isShown), [])
  
  return <TooltipContext.Provider value={{tooltip, setTooltip, swapTooltip}}>
      {children}
    </TooltipContext.Provider>
}

export const useTooltipContext=()=>useContext(TooltipContext)

export { TooltipContext, TooltipProvider};