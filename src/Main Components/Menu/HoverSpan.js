
import { useTooltipContext } from "./tooltipContext";

const HoverSpan=({text})=>{

  const {setTooltip}=useTooltipContext()

  const handleMouseEnter=e=>{
    let {left, bottom, width}=e.target.getBoundingClientRect()

    //set tooltip position centered for smaller screens, otherwise use the span element location
    const winWidth=window.innerWidth
    setTooltip({loc: {top: bottom, left: winWidth<400 ? winWidth/2 : left+width/2}, text})
  }
  const handleMouseLeave=()=>{
    setTooltip(false)
  }

  return <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{text}*</span>
}
export default HoverSpan
