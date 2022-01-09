
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import icons from "../icons";

const ReturnHome=()=>{

  const {language}=useGlobalContext()

  const text={
    BG: 'обратно в началото',
    EN: 'Back to Home Page'
  }

  return <Link to='/home' id='to-home'>
    {text[language]}
    <img className='icon' src={icons.arrowR} alt='right arrow'/>
  </Link>
}

export default ReturnHome