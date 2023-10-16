import MyAvatar from "../../assets/avatar_profile_.png";
import { BsLinkedin, BsGithub, BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-5xl flex flex-wrap items-center m-10">
        <div className=" flex justify-center flex-wrap items-center lg:grid lg:grid-cols-2 lg:max-w-5xl gap-2">
          <div className="mx-auto">
            <img src={MyAvatar} alt="my image" className="p-5 rounded-full " />
          </div>
          <div>
            <h1 className=" capitalize font-bold text-xl text-black font-serif ">
              I am Rohit Kumar Amdahl!
            </h1>
            <h2>
              <span className="font-bold text-xl">
                Junior Frontend Developer
              </span>
              , Noroff graduate okt-2023.
            </h2>
            <div className="px-4 ">
              <ul>
                <li>
                  Check out my projects, find more on my
                  <Link
                    className="underline px-2 text-blue-800 font-semibold"
                    to="https://github.com/RohitAmdahl"
                  >
                    GitHub.
                  </Link>
                </li>
                <ul className="list-disc">
                  <li className=" capitalize"> Html5, Css3, javascript.</li>
                  <li className=" capitalize">
                    Wordpress, style-components, Sass, framer-motion, Bootstrap,
                    TailwindCss.
                  </li>
                  <li className=" capitalize">React.js, Typescript.</li>
                  <li className=" capitalize">Supabase, firebase. </li>
                </ul>
              </ul>
            </div>
            <span className="text-lg"></span>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-2xl p-4 m-3 border-b-2 border-gray-400">
        <ul className="flex justify-between cursor-pointer m-4">
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-lg transition duration-150 ease-in-out hover:rounded-full hover:bg-blue-700 hover:text-red-200 font-bold shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "string",
              duration: 0.9,
            }}
            title="Linkedin"
          >
            <Link to="https://www.linkedin.com/feed/" target="_blank">
              <BsLinkedin size={24} />
            </Link>
          </motion.li>
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-lg transition duration-150 ease-in-out hover:rounded-full hover:bg-blue-700 hover:text-red-200 font-bold shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "string",
              duration: 0.9,
            }}
            title="Github"
          >
            <Link to="https://github.com/RohitAmdahl" target="_blank">
              <BsGithub size={25} />
            </Link>
          </motion.li>
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-lg transition duration-150 ease-in-out hover:rounded-full hover:bg-blue-700 hover:text-red-200 font-bold shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "string",
              duration: 0.9,
            }}
            title="Email"
          >
            <Link to="mailto:rohit_dsigner@outlook.com" target="_blank">
              <BsEnvelopeAt size={25} />
            </Link>
          </motion.li>
          <motion.li
            className="px-2 py-2 bg-gray-100 rounded-lg transition duration-150 ease-in-out hover:rounded-full hover:bg-blue-700 hover:text-red-200 font-bold shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "string",
              duration: 0.9,
            }}
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
