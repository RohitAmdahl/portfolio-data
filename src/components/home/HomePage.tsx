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
      <div className="m-10 text-text_ ">
        <div className=" flex justify-center flex-wrap items-center lg:grid lg:grid-cols-2 lg:max-w-5xl gap-2 mx-auto">
          <div className="mx-auto">
            <img
              src={MyAvatar}
              alt="my image"
              className="p-5 rounded-full max-w-picSize"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide pb-2 font-serif">
              Rohit Kumar Amdahl!
            </h1>
            <h2 className="font-bold text-2xl tracking-wide pb-2 font-serif">
              Frontend Developer
            </h2>
          </div>
        </div>
      </div>

      <div className="text-white container mx-auto max-w-2xl  flex flex-col justify-center items-center ">
        <div className="border-b-2 border-blue-500 pb-4 text-lg">
          <p className="py-1">
            Check out my School projects to that showcase my skills and
            creativity. 🎨💻 But wait,
            <Link
              className=" px-2 text-link font-semibold hover:underline hover:italic"
              to="https://github.com/RohitAmdahl"
              target="_blank"
            >
              there's more! My latest project, which I'm particularly excited
              about, is available on GitHub. 🚀
            </Link>
          </p>
        </div>
        <div className="my-4 py-5">
          <p className="font-bold text-2xl tracking-wide pb-2 font-serif ">
            Skills
          </p>
        </div>
        <div>
          <ul className="list-disc p-8 text-lg">
            <li className="capitalize">
              HTML5, CSS3, JavaScript, React, TypeScript
            </li>
            <li className="capitalize">Git, GitHub, Version Control</li>
            <li className="capitalize">
              WordPress, styled-components, Sass, framer-motion, Bootstrap,
              Tailwind CSS
            </li>
            <li className="capitalize">
              Design tools:- Figma, Adobe XD, Project management: Trello,
              <Link
                className="hover:underline px-2 text-link font-semibold hover:italic"
                to="https://webaim.org/resources/contrastchecker/"
                target="_blank"
              >
                WCAG
              </Link>
            </li>
            <li className="capitalize">Basic End To End testing</li>
            <li className="capitalize">
              Backend:- Supabase, Firebase, MongoDB, Express.js.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl p-4 m-3 border-blue-500 border-b-2 ">
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
