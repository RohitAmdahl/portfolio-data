import myPic from "../../assets/rohitImg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import Publication from "./Publication";
import { motion } from "framer-motion";
const HomePage: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "string",
            duration: 0.9,
          }}
          className="max-w-xs container mx-auto items-center P-2"
        >
          <span className="w-10 z-10 h-10 rounded-full p-2 absolute bg-orange-600  shadow-inner shadow-yellow-800"></span>
          <figure>
            <img
              src={myPic}
              alt="profile picture of rohit kumar amdahl in the picture he is smiling and looks very happy, he seems kind person"
              className=" max-w-xs container mx-auto rotate-3 p-6 shadow-2xl shadow-zinc-600 bg-backgroundColor rounded-xl relative"
            />
          </figure>
        </motion.div>
        <div className="max-w-4xl container mx-auto p-4">
          <h1 className="font-philosopher font-bold text-3xl py-4 text-center">
            Frontend Developer.
          </h1>
          <h2 className="font-philosopher text-xl py-2 mx-auto max-w-md text-center">
            Passionate about sharing coding knowledge and dedicated to crafting
            accessible products.
          </h2>
          <p className="text-lg py-2">
            Welcome to my website! I'm a dedicated Frontend Developer based in
            Oslo, Norway, currently expanding my expertise in Java and delving
            into the world of object-oriented programming. <br /> In 2021, I
            began a two-year journey into Frontend Development at Noroff. I love
            coding and expressing that love through writing.I write about
            different topics, aiming to make them easy for everyone to
            understand. Sharing knowledge is important to me, and I enjoy
            learning from other programmers.
            <br /> I started by studying Accessory Design and later worked in
            architectural firms, drawing plans, and creating 3D animations.
          </p>
          <p className="font-roboto text-xl py-2 text-center">
            - In short i will say, i like to write and i like to code.
          </p>
        </div>
        <div className="max-w-4xl font-roboto container mx-auto text-center p-4">
          <p className="text-xl font-bold lg:text-2xl">
            – Difficult to create good names, thinks Rohit, but he has 3 good
            tips. My article is published on kode24.
          </p>
        </div>
        <div className="max-w-4xl container mx-auto p-4">
          <Publication />
        </div>
        <div className="w-full bg-backgroundColor p-4">
          <div className="flex p-2 flex-wrap justify-center gap-6">
            <p className="font-sixtyfour font-bold text-center text-4xl animate-bounce p-3 ">
              Code Code Code..
            </p>
            <div className="max-w-sm flex flex-col">
              <Link
                className="flex flex-col px-9 gap-2 items-center font-philosopher text-lg
            fold-bold relative rounded border-2 border-black bg-white py-4 text-base font-bold text-black transition duration-100 hover:bg-red hover:text-white shadow-shadow"
                to="https://github.com/rohitamdahl"
                target="_blank"
                title="GitHub"
              >
                <FaGithub size={24} />
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="font-philosopher text-lg bg-backgroundColor">
          <div className="text-center font-philosopher  p-8 ">
            <p className="Font-bold text-3xl">Get in touch</p>
            <p> Find me on Outlook, LinkedIn, Discord, or give me a call.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-2xl container mx-auto p-4">
            <Link
              className="flex flex-col px-9 gap-2 items-center font-philosopher text-lg fold-bold relative rounded border-2 border-black bg-white py-4 text-base font-bold text-black transition duration-100 hover:bg-red hover:text-white shadow-shadow partypopper "
              to="https://www.linkedin.com/feed/"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin size={24} /> Linkedin
            </Link>
            <Link
              to="tel:+4740538464"
              className="flex flex-col px-9 gap-2 items-center font-philosopher text-lg
            fold-bold relative rounded border-2 border-black bg-white py-4 text-base font-bold text-black transition duration-100 hover:bg-red hover:text-white shadow-shadow"
              title="Phone"
            >
              <FaPhoneAlt size={24} />+ 47 405 384 64
            </Link>
            <Link
              className="flex flex-col px-9 gap-2 items-center font-philosopher text-lg
            fold-bold relative rounded border-2 border-black bg-white py-4 text-base font-bold text-black transition duration-100 hover:bg-red hover:text-white shadow-shadow"
              to="mailto:rohit_dsigner@outlook.com"
              target="_blank"
              title="Email"
            >
              <MdOutlineEmail size={24} />
              Email
            </Link>
            <Link
              className="flex flex-col px-9 gap-2 items-center font-philosopher text-lg
            fold-bold relative rounded border-2 border-black bg-white py-4 text-base font-bold text-black transition duration-100 hover:bg-red hover:text-white shadow-shadow"
              to="https://discord.com/828741507258646636"
              target="_blank"
              title="Discord"
            >
              <FaDiscord size={24} />
              Discord
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
