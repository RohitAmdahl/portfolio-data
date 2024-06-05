// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { NavLink } from "react-router-dom";
import myLogo from "../../assets/favikon.png";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl container mx-auto ">
        <nav className="flex justify-between items-center py-2 font-philosopher font-bold px-2">
          <div className="lg:m-2 m-1 text-center">
            <NavLink className=" text-xl" to="/">
              <figure>
                <img
                  src={myLogo}
                  alt="rohit kumar Amdahl logo"
                  className="max-w-[40px]"
                />
              </figure>
            </NavLink>
          </div>
          <ul className="flex justify-between items-center gap-4 uppercase font-Roboto  ">
            {navItems.map((item: NavigationLinks) => (
              <li className="" key={item.id}>
                <NavLink
                  className="text-lg hover:underline hover:text-gray-700 transition duration-100"
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
    </>
  );
};

export default Navbar;
