import MyAvatar from "../../assets/avatar_profile_.png";
import { BsLinkedin, BsGithub, BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "../projects/Project";
import resume from "../../assets/Rohit_Kumar.pdf";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-5xl flex flex-wrap items-center m-10 text-text_  rounded-2xl">
        <div className=" flex justify-center flex-wrap items-center lg:grid lg:grid-cols-2 lg:max-w-5xl gap-2">
          <div className="mx-auto">
            <img src={MyAvatar} alt="my image" className="p-5 rounded-full  " />
          </div>
          <div>
            <h1 className=" tracking-wider font-serif capitalize font-bold text-xl text-text_  ">
              I am Rohit Kumar Amdahl!
            </h1>
            <h2 className="font-bold text-2xl tracking-wide pb-2  font-serif ">
              Junior Frontend Developer
            </h2>
            <div className="px-4 ">
              <ul className="list-disc ">
                <li className="py-1">
                  Check out my projects, find more on my
                  <Link
                    className="underline px-2  text-link  font-semibold"
                    to="https://github.com/RohitAmdahl"
                  >
                    GitHub.
                  </Link>
                </li>
                <li className=" capitalize"> Html5, CSS3, JavaScript.</li>
                <li className=" capitalize">React, TypeScript.</li>
                <li className=" capitalize">
                  Git, GitHub, git Version Control.
                </li>
                <li className=" capitalize">
                  WordPress, styled-components, Sass, framer-motion, Bootstrap,
                  Tailwind CSS.
                </li>
                <li className=" capitalize">
                  Figma, Adobe XD, Trello,
                  <Link
                    className="underline px-2  text-link  font-semibold"
                    to="https://webaim.org/resources/contrastchecker/"
                  >
                    WCAG.
                  </Link>
                </li>
                <li className=" capitalize">Basic End To End testing.</li>
                <li className=" capitalize">Supabase, firebase. </li>
              </ul>
            </div>
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
            <Link to={resume} target="_blank">
              <AiOutlineFilePdf size={25} />
            </Link>
          </motion.li>
        </ul>
      </div>
      <Project />
    </>
  );
};

export default HomePage;
