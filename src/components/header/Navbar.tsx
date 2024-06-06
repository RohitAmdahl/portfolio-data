// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../../assets/favikon.png";

import { MdOutlineFileDownload } from "react-icons/md";
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
          {/* <ul className="flex justify-between items-center gap-4 uppercase font-Roboto  ">
            {navItems.map((item: NavigationLinks) => (
              // <li key={item.id}>
              //   <NavLink
              //     className="text-lg hover:underline hover:text-gray-700 transition duration-100"
              //     to={item.link}
              //   >
              //     {item.name}
              //   </NavLink>
              // </li>
            ))}
          </ul> */}
          <div>
            <Link
              to="https://discord.com/828741507258646636"
              target="_blank"
              title="Discord"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black"
            >
              <MdOutlineFileDownload size={24} />
              CV
            </Link>
          </div>
        </nav>
        {/* <div className="max-w-sm container mx-auto items-center"></div>
      <div className="flex justify-between items-center gap-3"></div> */}
      </div>
    </>
  );
};

export default Navbar;
