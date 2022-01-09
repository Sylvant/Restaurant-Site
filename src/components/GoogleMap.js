
import { useRef, useEffect, useState } from "react";

const GoogleMap=()=>{

  const iframeRef=useRef()

  const [isLoaded, setIsLoaded]=useState(false)

  //until google map is loaded, produces an animation effect for the element background
  useEffect(()=>{
    iframeRef.current.onload=()=>{
      setIsLoaded(true)
    }
  }, [])

  return (
      <div id="google-map">
        <iframe
          title="Establishment Location"
          id="gmap_canvas"
          className={isLoaded ? '' : 'animate'}
          src="https://maps.google.com/maps?q=bulgaria%20pleven%20panayot%20volov%202&t=&z=17&ie=UTF8&iwloc=&output=embed"
          ref={iframeRef}
        />
        <a href="https://www.embedgooglemap.net">google maps webpage</a>
        
      </div>
  );
}

export default GoogleMap
