
import { useEffect, useRef, useState } from "react"
import {useGlobalContext} from '../../context'

const ArrowUp=()=>{
  
  const [isAbsolute, setAbsolute]=useState(true)
  const {language}=useGlobalContext()

  const posRef=useRef()
  posRef.current='absolute'
  
  useEffect(()=>{
    const footer=document.querySelector('footer')
    let footerY=footer.offsetTop
    const winHeight=window.innerHeight
    const minScroll=winHeight*1.5
    let scrollLen=document.documentElement.scrollTop+winHeight

    //leaves some additional render time before updating footer offset again
    setTimeout(()=>footerY=footer.offsetTop, 1000)

    // make sure the arrow is visible when the user scrolls deeper in the menu and remain stationed above the footer, if he reach the bottom of the page
    function fixArrowBtn() {
      if (posRef.current==='fixed') {
        if (scrollLen>footerY || scrollLen<minScroll) {
          //make the arrow remain above the footer(bottom of the menu section)
          setAbsolute(true)
          posRef.current='absolute'
        }
      } else {
        if (scrollLen<footerY && scrollLen>minScroll) {
          //make arrow remain on the bottom corner of the screen
          setAbsolute(false)
          posRef.current='fixed'
        }
      }
    }

    fixArrowBtn()

    // updates scroll length when scrolling and updates arrow position if necessary
    function handleScroll() {
      scrollLen=document.documentElement.scrollTop+winHeight
      fixArrowBtn()
    }

    // update footer top position when user is resizing(width) screen
    function handleResize() {
      footerY=footer.offsetTop
      fixArrowBtn()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [language])

  return <div id='arrow-container'>
    <a href="#root" className={isAbsolute ? '' : 'scroll'}>
      <div/>  {/* CSS turns this div into arrow shape */}
    </a>
  </div>
}

export default ArrowUp