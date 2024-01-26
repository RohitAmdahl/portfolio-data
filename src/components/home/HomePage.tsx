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
              Rohit Kumar Amdahl
            </h1>
            <h2 className="font-bold text-2xl tracking-wide pb-2 font-serif">
              Frontend Developer
            </h2>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default HomePage;
