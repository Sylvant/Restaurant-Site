
import { SubmenuProvider } from "./submenuContext";

import Navbar from "./Navbar";
import Logo from "./Logo";
import LangToggle from "./LangToggle";
import Submenu from "./Submenu";
import Arrow from './Arrow'

const Header = () => {

  return (
    <SubmenuProvider>
    <header>
      <Logo />
      <Navbar />
      <LangToggle />
      <Arrow />
      <Submenu />
    </header>
    </SubmenuProvider>
  );
};

export default Header;
