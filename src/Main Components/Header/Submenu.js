
import { useEffect } from "react"
import { Link } from "react-router-dom"

import { useSubmenuContext } from "./submenuContext"
import MenuList from "./MenuSubmenu"
import ContactList from './ContactSubmenu'

const Submenu=()=>{

  const {submenu, swapIsWide, setSubmenu}=useSubmenuContext()
  
  useEffect(()=>{
    let isWide=window.innerWidth>500
    swapIsWide(isWide)

    const sizeMonitor=()=>{
      const size=window.innerWidth
      
      if (isWide && size<500) {
        isWide=false
        swapIsWide(false)
        if (submenu) setSubmenu('hide')
      } else if (!isWide && size>500) {
        isWide=true
        swapIsWide(true)
      }
    }

    const closeSubmenu=()=>{
      if (submenu) setSubmenu(false)
    }

    window.addEventListener('resize', sizeMonitor)
    window.addEventListener('scroll', closeSubmenu)
    return ()=>{
      window.removeEventListener('resize', sizeMonitor)
      window.removeEventListener('scroll', closeSubmenu)
    }
  }, [submenu, swapIsWide, setSubmenu])

  if (submenu) {
    return <ShowSubmenu {...{submenu, setSubmenu}}/>
  }
  return <aside id='submenu'/>
}

const ShowSubmenu=({submenu, setSubmenu})=>{

  const closeSubmenu=()=>{
    setSubmenu('hide')
    //clears hover effect from the NavLink, which opened the submenu
    const isHovered=document.querySelector('.hover')
    if (isHovered) isHovered.classList.remove('hover')
  }

  return <aside id='submenu' className='show' style={submenu.position}>
    <div onMouseLeave={closeSubmenu}>
      {/* A placeholder for the NavLink that opened the submenu. The link-frame has zero opacity but mimics the original link functionality */}
      <Link to={'/'+submenu.id} id='link-frame' style={{...submenu.linkSize, top: -submenu.linkSize.height, marginLeft: -submenu.linkSize.width/2}} onClick={closeSubmenu}/>
      {submenu.id==='menu' ? <MenuList /> : <ContactList />}
    </div>
  </aside>
}

export default Submenu