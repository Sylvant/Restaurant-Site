
import MenuItem from "./MenuItem"
import { useGlobalContext } from "../../context"
import { menuDesc } from "../../data"

const Desc=({language})=>{

  return <p className='desc'>* {menuDesc.list[language][language==='BG' ? 'Зехтин' : 'Olive Oil']}</p>
}

const MenuSection=({id, title, items})=>{

  const {language}=useGlobalContext()
  const index=language==='BG' ? 0 : 1

  return <section className='menu-section' id={id}>
    <h2 className='section-title'>{title}</h2>
    {items.map(([name, ...data], i)=>{
      const hasIngredients=typeof data[0]==='string'
      const ingredients=hasIngredients ? data[0] : ''
      const rest=hasIngredients ? data.slice(1) : data //contains portion/price pairs
      return <MenuItem key={i} {...{ name: name[index], ingredients, rest }} />
    })}
    {/* a small note regarding olive oil available on salads section */
    /салати|salad/i.test(title) && <Desc language={language}/>}
  </section>
}

export default MenuSection