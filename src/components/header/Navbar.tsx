// import { RxMoon } from "react-icons/rx";
// import { BiSun } from "react-icons/bi";
import { NavigationLinks, navItems } from "../../helpers/nav";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Cv from "../../assets/pdf/cv.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl container mx-auto px-4 py-2 fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30     ">
        <div className="flex justify-between items-center">
          <div className="lg:m-4  text-center ">
            <NavLink className=" text-2xl" to="/">
              <img src={logo} alt="rohit logo" className="max-w-[40px]" />
            </NavLink>
          </div>
          <div>
            <Link
              className="bg-blue-500 ring-4 ring-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black text-md "
              target="_blank"
              title="Download CV"
              to={Cv}
            >
              {" "}
              <MdOutlineFileDownload size={20} />
              CV
            </Link>
            {/* <link to="">CV</link> */}
          </div>
        </div>

        <nav className="flex py-2 font-semibold px-2">
          <ul className="flex justify-between w-full border-b-2 border-gray-400 border-dashed py-2 px-2">
            {navItems.map((item: NavigationLinks) => (
              <li className="px-1" key={item.id}>
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
