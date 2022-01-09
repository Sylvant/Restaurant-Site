
import { Link } from 'react-router-dom';
import icons from '../../icons';

const Logo=()=>{

  return <Link to='/' id='logo-container'><img id='logo' src={icons.logo} alt='bg party logo'/></Link>
}

export default Logo