import myPic from "../../assets/rohitImg.jpg";

// import firma from "../../assets/logo_firma.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";

import { motion } from "framer-motion";
const HomePage: React.FC = () => {
  return (
    <>
      <div className="mt-5 p-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "string",
            duration: 0.9,
          }}
          className=" max-w-4xl container mx-auto items-center backgroundTitle  bg-orange-300 rounded-2xl"
        >
          <div className="flex p-6 justify-between items-baseline max-w-4xl container mx-auto gap-6 pt-24">
            <figure>
              <img
                src={myPic}
                alt="profile picture of rohit kumar amdahl in the picture he is smiling and looks very happy, he seems kind person"
                className=" max-w-[150px] w-full border-8 border-emerald-600  shadow-2xl shadow-zinc-600 bg-backgroundColor rounded-3xl "
              />
            </figure>
            <div>
              <Link
                to="https://discord.com/828741507258646636"
                target="_blank"
                title="Discord"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black"
              >
                <FaGithub size={24} />
                GitHub
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="max-w-4xl container mx-auto text-white bg-[#1c232c]  p-8 pt-4">
        <div className="grid grid-cols-1  gap-3 ">
          <div>
            <h1 className="font-philosopher font-bold text-4xl pt-4 px-4">
              Rohit Kumar Amdahl <span className="text-sm">✨</span>
            </h1>
            <p className=" px-4 py-1 text-lg">
              Internship | Designer & Frontend developer at
              <span role="link" className="px-2 font-bold">
                <a
                  className="underline hover:text-pink-200 transition duration-100"
                  href="https://cleanseasolutions.no"
                >
                  Clean Sea Solutions AS
                </a>{" "}
              </span>
            </p>
            <p className=" px-4 text-lg">Oslo Norway</p>
          </div>
        </div>

        <div className=" max-w-sm mt-4 text-lg  bg-slate-900 rounded-2xl  ">
          <p className=" px-4 text-lg py-2 capitalize flex  gap-2 items-center">
            {" "}
            <MdOutlineWorkOutline /> open to new opportunities.
          </p>
        </div>
        <div className=" grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[250px] container pt-6 mx-4">
          <div>
            <Link
              to="https://www.linkedin.com/feed/"
              target="_blank"
              title="LinkedIn"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black"
            >
              <FaLinkedin size={24} /> Linkedin
            </Link>
          </div>
          <div>
            <Link
              to="mailto:rohit_dsigner@outlook.com"
              target="_blank"
              title="Email"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black"
            >
              <MdOutlineEmail size={24} />
              Email
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default HomePage;
