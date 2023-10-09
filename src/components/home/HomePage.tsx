import MyAvatar from "../../assets/avatar_profile_.png";
import { BsLinkedin, BsGithub, BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl flex flex-wrap items-center m-10">
        <div className=" flex justify-center items-center">
          <div>
            <img src={MyAvatar} alt="my image" className="p-5 rounded-full " />
          </div>

          <div className="px-4 w-1/2">
            <h1 className=" font-bold text-4xl text-black font-serif ">
              I am Rohit Kumar Amdahl!
            </h1>
            <span className=" text-lg">Frontend Developer.</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-2xl p-4 m-3 border-b-2 border-gray-400">
        <ul className="flex justify-between cursor-pointer m-4">
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-full hover:text-blue-700 font-bold shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5, stiffness: 500 }}
            title="Linkedin"
          >
            <Link to="https://www.linkedin.com/feed/" target="_blank">
              <BsLinkedin size={24} />
            </Link>
          </motion.li>
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-full hover:text-blue-700 font-bold shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5, stiffness: 500 }}
            title="Github"
          >
            <Link to="https://github.com/RohitAmdahl" target="_blank">
              <BsGithub size={25} />
            </Link>
          </motion.li>
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-full hover:text-blue-700 font-bold shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5, stiffness: 500 }}
            title="Email"
          >
            <Link to="mailto:rohit_dsigner@outlook.com" target="_blank">
              <BsEnvelopeAt size={25} />
            </Link>
          </motion.li>
          <motion.li
            className="px-2 py-2 bg-gray-100 shadow-xl rounded-full hover:text-blue-700 font-bold "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5, stiffness: 500 }}
            title="CV Pdf file"
          >
            <span className="">
              <AiOutlineFilePdf size={25} />
            </span>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
