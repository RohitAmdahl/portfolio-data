import { project, data } from "../../helpers/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

const Project: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl py-4 text-center">The projects</h1>

        <p className="  p-4 lg:p-2">
          Presenting my portfolio of personally crafted projects. Through
          project development, I've garnered invaluable learning experiences,
          honing problem-solving skills.
        </p>
        <p className="  p-4 lg:p-2">
          I take pride in designing every project using Figma and organizing
          tasks efficiently with Trello, showcasing not just the outcome but the
          journey of continual growth and innovation.
        </p>
      </div>
      {data.map((item: project) => {
        const {
          title,
          description,
          description_,
          description_1,
          githubLink,
          imgUrl,
          liveDemo,
          tech,
        } = item;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "string",
              duration: 0.9,
            }}
            className="m-4 p-4 border-b-2 container mx-auto flex flex-col items-center gap-4 md:max-w-xl lg:max-w-5xl"
            key={item.id}
          >
            <div className=" p-1">
              <img
                src={imgUrl}
                alt="image of laptop mockups a display of projects"
                title={title}
                className="max-w-[580px] w-full rounded-md"
              />
            </div>
            <div className=" lg:py-4 ">
              <div className="max-w-lg md:max-w-xl lg:p-2 lg:max-w-5xl">
                <h2 className="font-sixtyfour capitalize text-lg py-3 ">
                  {title}
                </h2>
                <p className=" p-2 lg:p-2">{description}</p>
              </div>
              <div className="max-w-lg md:max-w-xl lg:p-2 lg:max-w-5xl">
                <p className=" p-2 lg:p-2">{description_}</p>
              </div>
              <div className="max-w-lg md:max-w-xl lg:p-2 lg:max-w-5xl">
                <p className=" p-2 lg:p-2">{description_1}</p>
              </div>
              {/* <div className="max-w-lg md:max-w-xl lg:p-2 lg:max-w-5xl">
                <p className=" p-2 lg:p-2">{description_2}</p>
              </div>
              <div className="max-w-lg md:max-w-xl lg:p-2 lg:max-w-5xl">
                <p className=" p-2 lg:p-2">{description_3}</p>
              </div> */}
              <div className="flex flex-wrap capitalize items-center gap-2 p-2">
                {tech &&
                  tech.map((techItem, index) => (
                    <span
                      key={index}
                      className="bg-white text-black px-2 py-2 "
                    >
                      {techItem}
                    </span>
                  ))}
              </div>
              <div className=" flex">
                <div className=" m-4 ">
                  <Link
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
                    target="_blank"
                    to={liveDemo}
                  >
                    <IoIosGlobe size={24} />
                    Live Demo
                  </Link>
                </div>
                <div className="m-4">
                  <Link
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
                    target="_blank"
                    to={githubLink}
                  >
                    <FaGithub size={24} />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Project;
