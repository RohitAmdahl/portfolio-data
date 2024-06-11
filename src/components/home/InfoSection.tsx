import { Link } from "react-router-dom";
import firma from "../../assets/logo_firma.png";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";
const InfoSection = () => {
  return (
    <div className="max-w-4xl container mx-auto   text-textColor">
      <div className="py-4 px-4">
        <div>
          <h1 className="font-bold text-4xl pt-4  font-serif">
            Rohit Kumar Amdahl
          </h1>
          <p className="  py-2 text-lg font-semibold flex flex-wrap gap-4 ">
            Internship | Designer & Frontend developer at
            <span role="link" className="px-2 font-bold">
              <a
                className="underline text-blue-700 hover:text-blue-900 transition duration-100"
                href="https://cleanseasolutions.no"
              >
                Clean Sea Solutions AS
              </a>
            </span>
            <img
              className="max-w-[100px]"
              src={firma}
              alt="company logo clean sea solutions"
            />
          </p>
          <p className=" font-semibold text-lg">Oslo, Norway.</p>
          <div className=" max-w-sm mt-4 text-lg  bg-primary rounded-2xl">
            <p className=" px-4 text-lg py-2 capitalize flex text-pink-100  gap-2 items-center">
              {" "}
              <MdOutlineWorkOutline size={20} /> open to new opportunities /
              Work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[520px] w-full  py-6 ">
          <div>
            <Link
              to="https://www.linkedin.com/feed/"
              target="_blank"
              title="LinkedIn"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
            >
              <FaLinkedin size={22} /> Linkedin
            </Link>
          </div>
          <div>
            <Link
              to="mailto:rohit_dsigner@outlook.com"
              target="_blank"
              title="Email"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
            >
              <MdOutlineEmail size={22} />
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
