import { project, data } from "../../helpers/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Project: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-5xl text-center py-4 m-4">
        <h3 className="text-2xl font-bold">Projects</h3>
      </div>

      {data.map((item: project) => {
        console.log(item);
        const { title, description, githubLink, imgUrl, liveDemo } = item;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="m-4 p-4 border-b-4  container mx-auto flex justify-center flex-wrap items-center gap-4 md:max-w-3xl lg:max-w-5xl "
            key={item.id}
          >
            <div className="max-w-md p-4">
              <img
                src={imgUrl}
                alt="image of laptop mockups a display of projects"
                title={title}
              />
            </div>
            <div className=" lg:m-8 ">
              <div className="max-w-md lg:p-2 ">
                <h1 className="font-bold capitalize text-lg ">{title}</h1>
                <p>{description}</p>
              </div>
              <div className="flex justify-between items-center flex-wrap m-4 lg:grid lg:grid-cols-2 lg:gap-6 text-center ">
                <div className=" w-full cursor-pointer font-semibold px-2 py-2 m-4 bg-blue-800 text-white hover:bg-gray-800 transition-all duration-150 max-w-md rounded-lg">
                  <Link target="_blank" to={liveDemo}>
                    Live Demo
                  </Link>
                </div>
                <div className=" w-full cursor-pointer font-semibold px-2 py-2 m-4 bg-blue-800 text-white hover:bg-gray-800 transition-all duration-150 max-w-md rounded-lg">
                  <Link target="_blank" to={githubLink}>
                    Github
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
