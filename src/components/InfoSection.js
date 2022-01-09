
import { contactInfo} from "../data"
import icons from "../icons"
import { useGlobalContext } from "../context"

import InfoBox from "./InfoBox"

const InfoSection=({sections})=>{

  const {language}=useGlobalContext()
  
  const index = language === 'BG' ? 0 : 1;

  return <section id="info">
    {sections.map((section, i)=>{
      const {data, label, icon}=contactInfo[section]
      return <InfoBox key={i} {...{label: label[index], data: data[index], icon: icons[icon], alt: icon+' icon'}}/>})}
    </section>
}

export default InfoSection