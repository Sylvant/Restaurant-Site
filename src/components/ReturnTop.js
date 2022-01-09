
import { useGlobalContext } from "../context"

const ReturnTop=()=>{

  const {language}=useGlobalContext()

  return <div id='return'>
        <a href="#root">
          <div className='arrow'/>
          {language==='BG' ? 'обратно към началото': 'Back to Top'}
          </a>
    </div>
}

export default ReturnTop