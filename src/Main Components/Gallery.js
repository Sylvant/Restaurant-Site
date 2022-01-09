
/*
commented out- funcitonality for when images are loaded
*/
//import { useEffect, useRef, useState } from "react"
import { navItems } from "../data"
import { useGlobalContext } from "../context"

import ReturnTop from "../components/ReturnTop"
import images from "../images"

const Gallery=()=>{

  const {language}=useGlobalContext()

  /*
  const [imagesLoaded, setImagesLoaded]=useState(false)

  const imagesRef=useRef([]) 

  useEffect(()=>{
    const pictures=imagesRef.current
    const len=pictures.length
    let counter=0

    function incrementCounter(){
      counter++
      if (counter===len) {
        console.log('pictures loaded')
        setImagesLoaded(true)
      }
    }
    
    pictures.forEach(pic=>{
      if (pic.complete) {
        incrementCounter()
      } else {
        pic.addEventListener('load', incrementCounter)
      }
    })
  })
  */

  return <main id='gallery'>
    <div><h1 className='page-title'>{navItems[language][2]}</h1></div>
    {/*!imagesLoaded && <p>Pictures loading...</p>*/}
    {images.map(([img, size], i)=>{
      const alt=img.match(/(?<=\/)[^./]+(?=\.)/)[0]
      return <div key={i} className={`img-container ${size}`}>
      <img src={img} alt={alt}  /*ref={el=>imagesRef.current[i]=el} className={imagesLoaded ? '' : 'hide'}*//>
      </div>
    })}
    {/*imagesLoaded && */<ReturnTop />}
  </main>
}

export default Gallery



