
import { useGlobalContext } from "../../context";
import { formatContent, highlightSpecial } from "./functionality";

const InfoPair=({type='', portion, price, units})=>{

  //when type is available, produces a specific grid for the elements

  return (<div>
    {type && <p style={{flexGrow: 2, marginLeft: '1em'}}>{type}</p>}
    <p>{portion+units[1]}</p>
    <div>
      <h3>{price}</h3>
      <p>{units[0]}</p>
    </div>
  </div>)
}

const MenuItem=({name, ingredients, rest})=>{

  const {language}=useGlobalContext()

  const hasIngredients=ingredients && typeof ingredients==='string' ? true : false

  const units={
    BG: ['лв.', 'гр.'],
    EN: ['lv.', 'g']
  }

  //checks the data structure in order to determine its html representation later
  const restIsArr=Array.isArray(rest[0])
  const isMany=rest.length>2 && !restIsArr  

  //arranges data into portion/price pairs
  if (isMany) {
    rest=rest.reduce((all, n, i)=>{
      if (i%2===0) {
        if (!rest[i+1]) console.log('menu item data portion-price pairs is invalid at-', name)
        all.push([n, rest[i+1]])
      }
      return all
    }, [])
  }

  return (
    <article className="item">
      <h3 style={hasIngredients ? {} : {borderBottom: 'none'}}>{highlightSpecial(name, language)}</h3>
      {hasIngredients && <p>{formatContent(ingredients, language)}</p>}
      {restIsArr ? rest.map(([type, portion, price], i)=>{
        if (language==='EN') type=formatContent(type, 'EN')
        return <InfoPair key={i} {...{type, portion, price, units: units[language]}}/>
        }) : isMany ? rest.map(([portion, price], i)=><InfoPair key={i} {...{portion, price, units: units[language]}}/>) : <InfoPair {...{portion: rest[0], price: rest[1], units: units[language]}}/>}
    </article>
  );
}

export default MenuItem