
import { useEffect, useRef } from "react";
import { useGlobalContext} from "../../context";
import { useTooltipContext } from "./tooltipContext";
import { menuDesc, lexicon } from "../../data";

const Tooltip=()=>{
  
  const {language}=useGlobalContext()
  const {tooltip, swapTooltip}=useTooltipContext()

  // create set of items description to choose from
  const descObj= language==='BG' ? menuDesc.list['BG'] : {...lexicon, ...menuDesc.list['EN']}

  // return description text by provided tag
  const getText=text=>{
    // using regex and loop thru object keys duo to possible case sensitivity
    const regex=new RegExp(text, 'i')
    for (const key in descObj){
      if (regex.test(key)) return descObj[key]
    }
    return 'No description available'
  }

  const toolBox=useRef()
  const hasTooltip=useRef()
  hasTooltip.current=false

  useEffect(()=>{
    if (tooltip) {

      //adjust tooltip positioning if it leaves the screen
      if (window.innerWidth>400){
        const toolBoxLoc=toolBox.current.getBoundingClientRect()
        const {left, right, width}=toolBoxLoc
        const winSize=window.innerWidth
        
        if (width+20>winSize) {
          console.log('submenu too big for screen', tooltip)
        } else {

          function updatePositioning(position){
            swapTooltip(tooltip=>{
            //update positioning only if tooltip is still available
            if (tooltip) return {...tooltip, position}
            return false
            })
          }

          if (left<8) {
            const position={left: left*-1+10}
            updatePositioning(position)
          } else if (right+8>winSize) {
            const position={right: right-winSize+10}
            updatePositioning(position)
          }
        }
      }
      
      //close tooltip on scrolling
      const handleScroll=()=>{
        swapTooltip(false)
      }
      window.addEventListener('scroll', handleScroll)
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    }    
  }, [tooltip, swapTooltip])

  return <div id='tooltip' style={tooltip ? {...tooltip.loc, display: 'block'} : {}}><div style={tooltip.position ? tooltip.position : {}} ref={toolBox}><p>{getText(tooltip.text)}</p></div></div>
}

export default Tooltip
