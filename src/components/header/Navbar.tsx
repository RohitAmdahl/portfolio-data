import logo from "../../assets/mylogo.png";
// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto flex justify-between items-center font-serif">
      <div className="">
        <div className="m-4 ">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="w-auto h-auto max-w-mdSize flex items-center"
            />
          </NavLink>
        </div>
        <nav className="flex items-center">
          <ul className="flex justify-between w-full">
            {navItems.map((item: NavigationLinks) => (
              <li key={item.id}>
                <NavLink
                  className="text-xl hover:text-emerald-600 transition duration-300"
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* <div className="max-w-sm container mx-auto items-center"></div>
      <div className="flex justify-between items-center gap-3"></div> */}
    </div>
  );
};

export default Navbar;
