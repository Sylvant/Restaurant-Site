
import { useEffect, useState } from "react";

function useOffset() {

  const [offset, setOffset]=useState(null)

  useEffect(()=>{
    const subLoc=document.querySelector('.submenu').getBoundingClientRect()
    const winSize=window.innerWidth
    const {left, right}=subLoc
    const leftIsOff=left-8<0
    const rightIsOff=right+8>winSize
    if (leftIsOff && rightIsOff) {
      console.log('sub container too wide')
    } else if (leftIsOff) {
      setOffset({left: left*-1+10})
    } else if (rightIsOff) {
      setOffset({right: right-winSize+20})
    }
  }, [])

  return offset
}

export default useOffset