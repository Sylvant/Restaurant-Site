
import {useGlobalContext} from '../context.js'
import { home } from '../data.js';
import InfoSection from '../components/InfoSection.js';

const Home=()=>{

  const {language}=useGlobalContext()

  const index=language==='BG' ? 0 : 1

  return (
    <main id="home-container">
      <h1 id="home-title">{home.title[index]}</h1>
      <p id="description">{home.description[index]}</p>
      <InfoSection sections={['phone', 'address', 'holiday', 'schedule', 'capacity']}/>
    </main>
  );
}

export default Home
