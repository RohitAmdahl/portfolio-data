import logo from "../../assets/mylogo.png";
// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="w-full text-text_ ">
        <div className="container max-w-4xl border-b-2 border-gray-400 px-6 py-2  mx-auto flex justify-between items-center font-serif">
          <div className="flex">
            <div className="lg:m-4 m-1 ">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-auto h-auto max-w-mdSize flex items-center"
                />
              </NavLink>
            </div>
          </div>
          <nav className="flex items-center">
            <ul className="flex justify-between w-full">
              {navItems.map((item: NavigationLinks) => (
                <li className="px-3" key={item.id}>
                  <NavLink
                    className="text-lg hover:text-blue-700 transition duration-100"
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div className="max-w-sm container mx-auto items-center"></div>
      <div className="flex justify-between items-center gap-3"></div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
