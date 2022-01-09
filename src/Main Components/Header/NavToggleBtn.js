
import { useEffect, useRef } from "react"

const NavToggleBtn=()=>{

  const btnRef=useRef()

  const toggleNavBar=()=>{
    btnRef.current.classList.toggle('flip')
    const navList=document.getElementById('nav-list')
    navList.classList.toggle('show')
  }

  const hovered=useRef()
  const isWide=useRef()
  isWide.current=false

  useEffect(()=>{

    isWide.current=window.innerWidth>300

    const navbar=document.querySelector('nav')
    const navList=document.getElementById('nav-list')

    function updateClass(element, className) {
      if (element.classList.contains(className)) {
        //console.log(`removing class "${className}" from ${element.nodeName} element`)
        element.classList.remove(className)
      }
    }

    //makes navbar position fixed if it reaches top border of the screen when scrolling
    const handleScroll=()=>{
      const scrollLen=document.documentElement.scrollTop
      const navOffset=navbar.offsetTop
      const langOffset=document.getElementById('language').offsetTop
      const hasScroll=navbar.classList.contains('scroll')
      if (scrollLen>navOffset-10 && !hasScroll) {
        navbar.classList.add('scroll')
      } else if (scrollLen<langOffset && hasScroll) {
        navbar.classList.remove('scroll')
      }
    }

    //when clicking outside of the menu, close its frame(only active on small screens)
    const handleClick=()=>{      
      if (!hovered.current) {
        updateClass(navList, 'show')
        updateClass(btnRef.current, 'flip')
      }
    }

    function handleEventListeners(action){
      if (action==='add') {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('click', handleClick)
      } else if (action==='remove') {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('click', handleClick)
      } else {
        console.log('trying to execute undefined action with event listeners')
      }
    }

    const handleResize=()=>{
      const isNarrow=window.innerWidth<300

      // NARROW screen
      if (isNarrow && isWide.current) {
        isWide.current=false
        
        //if window is scrolled, make navbar be fixed position
        if (document.documentElement.scrollTop>navbar.offsetTop-10) {
          navbar.classList.add('scroll')
        }
        
        handleEventListeners('add')
      } 
      // WIDE screen
      else if (!isNarrow && !isWide.current) {
        isWide.current=true

        //clear narrow screen classes from nav elements
        updateClass(navbar, 'scroll')
        updateClass(navList, 'show')
        updateClass(btnRef.current, 'flip')
        
        handleEventListeners('remove')
      }
    }

    window.addEventListener('resize', handleResize)
    if (!isWide.current) {
      handleEventListeners('add')
    }
    return ()=>{
      window.removeEventListener('resize', handleResize)
      if (!isWide.current) {
        handleEventListeners('remove')
      }
    }

  }, [])

  const handleMouseEnter=()=>{
    hovered.current=true
  }
  const handleMouseLeave=()=>{
    hovered.current=false
  }
  
  return <button id="nav-toggle" onClick={toggleNavBar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={btnRef}>
    {/* 3 lines emulating list image */}
    <hr />
    <hr />
    <hr />
  </button>
}

export default NavToggleBtn