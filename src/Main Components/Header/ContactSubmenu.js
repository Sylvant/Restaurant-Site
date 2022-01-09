
import { contactInfo } from "../../data"
import { useGlobalContext } from "../../context"
import icons from "../../icons"
import useOffset from "./useOffset"

const MenuList=()=>{

  const {language}=useGlobalContext()

  const index=language==='BG' ? 0 : 1

  const offset=useOffset()

  return <div id='contact-list' className='submenu' style={offset ? offset : {}}>{Object.entries(contactInfo).map(([key, {label, icon, data}])=><div key={key}>
    <img src={icons[icon]} className='icon' alt={icon+' icon'} />
    <p>{label[index]}</p>
    {key==='phone' ? (<div><p>{data[index][0]}</p><p>{data[index][1]}</p></div>) : <p>{Array.isArray(data[index]) ? data[index].join('/ ') : data[index]}</p>}
    </div>)}</div>
}

export default MenuList