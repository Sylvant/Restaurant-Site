
import { menu, navItems, lexicon, menuDesc } from '../../data'
import { useGlobalContext } from '../../context'
import { TooltipProvider } from './tooltipContext'

import Tooltip from './Tooltip'
import DescList from './DescList'
//import ReturnTop from '../../components/ReturnTop'
import MenuSection from './MenuSection'
import ArrowUp from './ArrowUp'

const Menu=()=>{
  const {language}=useGlobalContext()

  return <TooltipProvider>
  <main>
    <h1 className='page-title'>{navItems[language][1]}</h1>
    {/* for English, additional note is present on top of the page, regarding words marked with * sign, which offer extra description*/
    language==='EN' && <p style={{textAlign: 'left', margin: '0 10%'}}>{menuDesc.desc[language]}</p>}
    {Object.keys(menu).map((section, i)=>{
      const sectionData=menu[section]
      return <MenuSection key={i} title={sectionData.title[language]} items={sectionData.items} id={section}/>
    })}
    <div id='desc-container'>
      <DescList title={menuDesc.title[language]} list={menuDesc.list[language]}/>
      {language==='EN' && <DescList title='Lexicon' list={lexicon}/>}
    </div>
    <ArrowUp />
    <Tooltip />
  </main>
  </TooltipProvider>
}

export default Menu
