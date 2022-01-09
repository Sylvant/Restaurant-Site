
import { useGlobalContext } from "../context"
import { contactInfo } from "../data"
import icons from "../icons"

const Footer=()=>{

  const {language}=useGlobalContext()

  const index=language==='BG' ? 0 : 1

  return <footer>
    <div id='info-container'>
      {['phone', 'schedule', 'address'].map((section, i)=>{
        const {icon, data}=contactInfo[section]
        return <div key={i}>
          <img src={icons[icon]} alt={section+' icon'} className='icon'/>
          {Array.isArray(data[0]) ? data[index].map((item, e)=><p key={e}>{item}</p>) : <p>{data[index]}</p>}
        </div>
      })}
      <a href='https://github.com/Sylvant'>
        <span>{['дизайн', 'created by'][index]}</span>
        <img src={icons.S} alt="S icon" className='icon'/>
      </a>
    </div>
  </footer>
}

export default Footer