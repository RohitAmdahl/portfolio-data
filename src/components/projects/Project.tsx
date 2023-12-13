import { project, data } from "../../helpers/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl  py-4 m-4">
        <h3 className="text-2xl text-center capitalize font-serif font-bold text-text_">
          " The projects "
        </h3>

        <p className="text-text_ p-4">
          Presenting my portfolio of personally crafted projects, each stemming
          from individual tasks and exam assignments. Through project
          development, I've garnered invaluable learning experiences, honing
          problem-solving skills.
        </p>
        <p className="text-text_ p-4">
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
          githubLink,
          imgUrl,
          liveDemo,
        } = item;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              type: "string",
              duration: 0.9,
            }}
            className="m-4 text-text_ p-4 border-b-2  container mx-auto flex flex-col items-center gap-4 md:max-w-4xl lg:max-w-4xl border-blue-500 "
            key={item.id}
          >
            <div className="max-w-lg p-1">
              <img
                src={imgUrl}
                alt="image of laptop mockups a display of projects"
                title={title}
              />
            </div>
            <div className=" lg:m-8 text-text_">
              <div className="max-w-4xl lg:p-2  ">
                <h1 className="font-bold capitalize text-lg py-3 ">{title}</h1>
                <p>{description}</p>
              </div>
              <div>
                <p className="lg:p-2 ">{description_}</p>
              </div>
              <div className="flex justify-between items-center flex-wrap m-4 lg:grid lg:grid-cols-2 lg:gap-6 text-center ">
                <Link
                  className=" w-full cursor-pointer font-semibold px-2 py-2 m-4 bg-blue-800 text-white hover:bg-gray-800 transition-all duration-150 max-w-md rounded-lg"
                  target="_blank"
                  to={liveDemo}
                >
                  Live Demo
                </Link>

                <Link
                  className=" w-full cursor-pointer font-semibold px-2 py-2 m-4 bg-blue-800 text-white hover:bg-gray-800 transition-all duration-150 max-w-md rounded-lg"
                  target="_blank"
                  to={githubLink}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Project;
