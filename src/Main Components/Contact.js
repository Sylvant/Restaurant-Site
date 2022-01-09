
import { useGlobalContext } from '../context.js';
import { address, navItems } from '../data.js';

import GoogleMap from '../components/GoogleMap.js';
import InfoSection from '../components/InfoSection.js';

import locImg from '../Images/Icons/location icon.svg'

const Contact = () => {
  
  const { language } = useGlobalContext();

  const index = language === 'BG' ? 0 : 1;

  return (
    <main id={navItems.ids[3]}>
      <h1 className="page-title">{navItems[language][3]}</h1>

      <InfoSection sections={['phone', 'holiday', 'schedule', 'capacity']}/>

      <section id="address">
        <h2 className="page-title">{address.title[index]}</h2>
        <div id="address-info">
          <img className="icon" src={locImg} alt='Location Icon'/>
          <p>
            <span>{address.labels[index][0]}</span> {address.city[index]}
          </p>
          <p>
            <span>{address.labels[index][1]}</span> {address.street[index]} 
            <span>№{address.number}</span>
          </p>
        </div>

        <GoogleMap />
      </section>
    </main>
  );
};

export default Contact;