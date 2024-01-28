import { Link } from "react-router-dom";
import myPic from "../../assets/rohitImg.jpg";
import { FaGithub } from "react-icons/fa";
// import Project from "../projects/Project";

const HomePage: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <div className="max-w-sm container mx-auto">
          <img
            src={myPic}
            alt="profile picture of rohit kumar amdahl in the picture he is smiling and looks very happy, he seems kind person"
            // className="animated-dashed-border bordermvent active-animatioon"
            className="p-4 animated-dashed-border bordermvent active-animatioon"
          />
        </div>
        <div className="max-w-4xl container mx-auto">
          <h1 className="font-philosopher text-3xl py-4 text-center">
            Frontend Developer, Code Enthusiast, Article Author.
          </h1>
          <p className="font-philosopher text-xl py-2 mx-auto max-w-md text-center">
            Passionate about sharing coding knowledge and dedicated to crafting
            accessible products.
          </p>
          <p className="font-roboto text-lg py-2">
            Welcome to my website! I'm a Frontend Developer based in Oslo,
            Norway. I started by studying Accessory Design and later worked in
            architectural firms, drawing plans, and creating 3D animations. In
            2021, I began a two-year journey into Frontend Development at
            Noroff. I love coding and expressing that love through writing.I
            write about different topics, aiming to make them easy for everyone
            to understand. Sharing knowledge is important to me, and I enjoy
            learning from other programmers.
          </p>
          <p className="font-philosopher text-lg py-2 text-center">
            In short i will say, i like to write and i like to code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            className="flex gap-2 items-center font-philosopher text-lg
            fold-bold relative rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-red hover:text-white shadow-shadow"
            href="https://github.com/rohitamdahl"
            target="_blank"
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </div>
      </section>

      {/* <Project /> */}
    </>
  );
};

export default HomePage;
