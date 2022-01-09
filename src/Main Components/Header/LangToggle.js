
import { useRef, useEffect, useState } from "react";
import { useGlobalContext } from '../../context';

function LangBtn({lang, language, handleClick}){

return <button className={language===lang ? 'language selected' : 'language'} onClick={()=>handleClick(lang)} type='button'>{lang}</button>
}

const LangToggle=()=>{

  const {language, setLanguage}=useGlobalContext()
  const refContainer=useRef(null)

  const [isOpen, setIsOpen]=useState(false)

  useEffect(()=>{
    // close language menu if user clicks outside its area
    const handleOutsideClick = e => {
      if (e.target.type !== 'button' && refContainer.current.style.display === 'block') {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', handleOutsideClick)
    return () => document.body.removeEventListener('click', handleOutsideClick)
  }, [])

  const handleClick=lang=>{
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div id="language" className={isOpen ? 'active' : ''}>
      <button onClick={()=>setIsOpen(!isOpen)} type='button'>{language}</button>
      <div ref={refContainer} style={{ display: isOpen ? 'block' : 'none' }}>
        <LangBtn {...{lang: 'BG', language, handleClick}}/>
        <LangBtn {...{lang: 'EN', language, handleClick}}/>
      </div>
    </div>
  );
}

export default LangToggle