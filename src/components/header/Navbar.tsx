// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="lg:m-4 m-1 text-center ">
          <NavLink className=" text-2xl" to="/">
            <span className="font-sixtyfour p-2 capitalize from-neutral-500 font-normal tracking-wider ">
              Rohit Kumar Amdahl
            </span>
          </NavLink>
        </div>
        <nav className="flex py-5 font-philosopher font-bold px-2">
          <ul className="flex justify-around w-full uppercase font-Roboto border-b-4 border-gray-400 border-dashed py-2 px-2">
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
