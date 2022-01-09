
import NavLink from "./NavLink";
import NavToggleBtn from "./NavToggleBtn";
import { useGlobalContext } from "../../context";
import { navItems } from "../../data";

const Navbar = () => {

  const {language}=useGlobalContext()

  return (
    <nav>
      {/* The nav toggle button is available only when the user screen is narrow(bellow 300px) and its purpose is to show/hide the nav bar contents for smaller screens*/}
      <NavToggleBtn />
      <ul id="nav-list">
        {navItems[language].map((section, i) => {
          return <NavLink key={i} {...{name: section, id: navItems.ids[i]}}/>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
