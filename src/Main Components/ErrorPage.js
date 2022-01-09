
import { useGlobalContext } from "../context";
import ReturnHome from "../components/ReturnHome";

import icons from "../icons";

const ErrorPage=()=>{

  const {language}=useGlobalContext()

  const text={
    BG: 'Страницата която търсите не е налична',
    EN: 'The page you are trying to access does not exist'
  }

  return <main>
    <div id='error-page-message-container'>
      <div>
        <img className='icon' src={icons.attention} alt='attention sign'/>
        <p>{text[language]}</p>
      </div>
      <ReturnHome />
    </div>
  </main>
}

export default ErrorPage