import myPic from "../../assets/rohitImg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { Link } from "react-router-dom";
// import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";

import { motion } from "framer-motion";
import InfoSection from "./InfoSection";
const HomePage: React.FC = () => {
  return (
    <>
      <section className="max-w-4xl container mx-auto mt-32 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "string",
            duration: 0.9,
          }}
          className="P-2 h-52"
        >
          <div className="py-3 max-w-4xl container mx-auto flex justify-between items-baseline gap-3 bg-pic bg-cover  bg-no-repeat px-4  bg-top">
            <figure className="max-w-[150px] w-full pt-14 ">
              <img
                src={myPic}
                alt="profile picture of rohit kumar amdahl in the picture he is smiling and looks very happy, he seems kind person"
                className=" max-w-[140px] w-full mx-auto border-8 border-emerald-600 shadow-2xl shadow-zinc-600 bg-backgroundColor rounded-full"
              />
            </figure>
            <div className="flex justify-between items-end">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
                to="https://github.com/RohitAmdahl"
                target="_blank"
                title="LinkedIn"
              >
                <FaGithub size={24} /> Github
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="mt-10">
        <InfoSection />
      </section>
    </>
  );
};

export default HomePage;
