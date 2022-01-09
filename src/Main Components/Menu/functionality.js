
import { menuDesc, lexicon } from "../../data";
import HoverSpan from "./HoverSpan";

const dictionary = {
  чеснова: 'garlic',
  с: 'with',
  със: 'with',
  и: 'and',
  филе: 'fillet steak',
  'по': 'by',
  'избор': 'choice',
  'гарнитура': 'garnished with',
  'задушен': 'steamed',
  'задушени': 'steamed',
  зехтин: 'olive oil',
  'бр': 'x',
  'лимон': 'lemon',
  'домати': 'tomatoes',
  'домат': 'tomato',
  'краставица': 'cucumbers',
  'краставици': 'cucumber',
  'маслини': 'olives',
  'лук': 'onion',
  'шунка': 'ham',
  'кашкавал': 'cheese',
  'сирене': 'sirene',
  'гъби': 'mushrooms',
  'яйце': 'egg',
  'лют': 'chilli',
  'люти': 'chilli',
  'люта': 'chilli',
  'яйца': 'eggs',
  'чушка': 'pepper',
  'чушки': 'peppers',
  'печен': 'baked',
  'печена': 'roast',
  'печени': 'roast',
  'пържола': 'steak',
  'капия': 'bell pepper',
  'капии': 'bell peppers',
  'ябълка': 'apple',
  'мляко': 'milk',
  'хлебче': 'bun', 
  'кисело мляко': 'Bulgarian yogurt',
  'цедено мляко': 'strained yogurt',
  'чесън': 'garlic',
  'копър': 'fennel',
  'магданоз': 'parsley',
  'зелена салата': 'lettuce',
  'морков': 'carrot',
  'моркови': 'carrots',
  'риба тон': 'tuna',
  'зеле': 'cabbage',
  'краве сирене': 'white cow cheese(sirene)',
  'овче сирене': 'white sheep cheese(sirene)',
  'майонеза': 'mayonnaise',
  'люта чушка': 'chilli pepper',
  'люто чушле': 'chilli pepper',
  'бекон': 'bacon',
  'чеснов сос': 'garlic sauce',
  'пилешко месо': 'chicken meat',
  'пилешка пържола': 'chicken steab',
  'кисели краставички': 'sweet and sour cucumbers',
  'пържени картофи': 'french fries',
  'картоф': 'potatoe',
  'картофи': 'potatoes',
  'луканка': 'flat sausage',
  'масло': 'butter',
  'пилешко': 'chicken',
  'пилешки': 'chicken',
  'телешко': 'beef',
  'свинско': 'pork',
  'свински': 'pork',
  'свинска': 'pork',
  'обикновен': 'regular',
  броя: 'x quantity',
  'голям': 'big',
  скумрия: 'mackerel',
  пъстърва: 'trout',
  'пилешки дробчета': 'chicken liver',
  'пилешко филе': 'chicken fillet',
  'пармезан': 'parmesan',
  'свинско филе': 'pork fillet',
  'босилек': 'basil',
  'доматен сос': 'tomato sauce',
  'царевица': 'corn',
  'топено сирене': 'creamy cheese',
  'шпек салам': 'bacon salami',
  'вратна пържола': 'shoulder steak',
  'кюфте': 'meatball',
  'кюфтета': "meatball's",
  'кебапче': 'kebab',
  шоколад:'chocolate',
  конфитюр: 'fruit jam',
  'свинско шишче': 'pork skewer',
  'или': 'or',
  'месо': 'meat',
  'пресни': 'fresh',
  'пресен': 'fresh',
  'грах': 'pea',
  'чеснова паста': 'garlic butter',
  'ролца от раци': 'crab rolls',
  'пушено сирене': 'smoked cheese',
  'сметана': 'cream',
  'запечено': 'baked',
  'варено': 'boiled',
  'играчка': 'toy',
};

// translates ingredients from BG to EN
function translateToEN(ingredients){
  if (typeof ingredients!=='string') return 'ingredients not a type of string'
  
  //determines whether to perform case-sensitive translation
  const hasCapital=/[А-Я]/.test(ingredients)

  function checkDictionary(ingredient){
    const isCapitalized=hasCapital ? /[А-Я]/.test(ingredient[0]) : false
    const checkWord=isCapitalized ? dictionary[ingredient.toLowerCase()] : dictionary[ingredient]
    
    if (checkWord) {
      return isCapitalized ? checkWord[0].toUpperCase()+checkWord.slice(1) : checkWord
    }
    //if 'ingredient' was not found in the dictionary and is more than one word, checks them separately
    if (ingredient.includes(' ')) {
      return ingredient.replace(/[а-я]+/gi, checkDictionary)
    }
    return 'NO SUCH WORD!!!'
  }

  //the regex replaces strings that are split by delimiters different from blank space
  const translation=ingredients.replace(/(?! )[а-я ]+/gi, checkDictionary);
  return translation
}

// list of all special words
const specialWords={
  BG: Object.keys(menuDesc.list['BG']).sort((a,b)=>b.length-a.length),
  EN: Object.keys({...menuDesc.list['EN'], ...lexicon}).sort((a,b)=>b.length-a.length),

  //sort is important so regex checks for the longest match first("sirene po shopski">"sirene")
}

export function highlightSpecial(text, lang) {
  //looks for special words and puts them in a span, to provide tooltip
  const regex=new RegExp('('+specialWords[lang].join('|')+')', 'gi')
  if (regex.test(text)) {
    return text.split(regex).map((word, i)=>regex.test(word) ? <HoverSpan key={i} text={word} /> : word)
  }
  return text
}

export const formatContent=(text='', lang='BG')=>{

  if (lang==='EN') {
    text=translateToEN(text)
  }
  
  return highlightSpecial(text, lang)
}
