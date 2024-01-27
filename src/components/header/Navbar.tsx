// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="lg:m-4 m-1 text-center ">
          <NavLink className=" font-bold text-2xl" to="/">
            <span className="font-new p-2">Rohit kumar Amdahl</span>
          </NavLink>
        </div>
        <nav className="flex py-5 font-Philosopher font-bold">
          <ul className="flex justify-around w-full">
            {navItems.map((item: NavigationLinks) => (
              <li className="px-3" key={item.id}>
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
