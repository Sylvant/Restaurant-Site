
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useSubmenuContext } from "./submenuContext"

const NavLink=({name, id})=>{
  
  const hasSubmenu=id==='contact' || id==='menu'

  if (hasSubmenu) {
    return <NavLinkSub {...{name, id}}/>
  }
  return <li>
      <Link to={id==='home' ? '/' : '/'+id}>{name}</Link>
    </li>
}

const NavLinkSub=({name, id})=>{

  const {isWide, setSubmenu}=useSubmenuContext()

  const liRef=useRef()

  if (!isWide) {
    return <li>
      <Link to={id==='home' ? '/' : '/'+id}>{name}</Link>
    </li>
  }

  const handleMouseEnter=e=>{
    // on mouseEnter shows submenu, while sending data for its position and content
    liRef.current.classList.add('hover')
    const linkLoc=e.target.getBoundingClientRect()
    const {bottom, left, width, height}=linkLoc
    const position={top: bottom, left: left+width/2}

    //link size is used to produce a fake link frame, which must be slightly bigger, to ensure proper functioning of mouse leave
    const linkSize={width: width+4, height: height+2}
    const payload={
      id, position, linkSize
    }
    setSubmenu('show', payload)
  }

  return <li onMouseEnter={handleMouseEnter} ref={liRef}>
    <Link to={id==='home' ? '/' : '/'+id}>{name}</Link>
  </li>
}

export default NavLink
