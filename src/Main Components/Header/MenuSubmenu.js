
import { menu } from "../../data"
import { useGlobalContext } from "../../context"
import useOffset from "./useOffset"
import { HashLink } from "react-router-hash-link"

const MenuList=()=>{

  const {language}=useGlobalContext()

  const index=language==='BG' ? 0 : 1

  const offset=useOffset()

  const handleClick=()=>{
    //clears hover effect from the NavLink, which opened the submenu
    const isHovered=document.querySelector('.hover')
    if (isHovered) isHovered.classList.remove('hover')
  }

  return <div id='menu-list' className='submenu' style={offset ? offset : {}}>{Object.entries(menu).map(([key, {title, items}])=>(
    <HashLink key={key} to={`/menu#${key}`} onClick={handleClick}>
      <h3>{title[language]}</h3>
      <div>{items.slice(0,6).map(([name, ...rest], i)=><p key={i}>{name[index]}</p>)}</div>
      {items.length>6 && ['още', 'more'][index]}{items.length>6 && <span className='dots'>...</span>}
    </HashLink>
    )
    )}</div>
}

export default MenuList