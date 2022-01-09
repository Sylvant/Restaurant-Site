
import { useSubmenuContext } from "./submenuContext"

const Arrow=()=>{

  const {submenu}=useSubmenuContext()

  if (submenu) {
    return <div id='arrow' className='show' style={submenu.position}><div className='arrow'/></div>
  }
  return <div id='arrow'/>
}

export default Arrow