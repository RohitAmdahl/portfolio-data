import MyAvatar from "../../assets/avatar_profile_.png";
import { BsLinkedin, BsGithub, BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl flex flex-wrap items-center m-10">
        <div className=" flex justify-center items-center">
          <div>
            <img src={MyAvatar} alt="my image" className="p-5 rounded-full " />
          </div>

          <div className="px-4 w-1/2">
            <h1 className=" font-bold text-4xl text-black font-serif ">
              I am Rohit Kumar Amdahl!
            </h1>
            <span className=" text-lg">Frontend Developer.</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-2xl p-4 m-3 border-t-2 border-gray-400">
        <ul className="flex justify-between cursor-pointer m-4">
          <li
            className="px-2 py-2 bg-gray-300 rounded-full hover:bg-slate-200 shadow-lg shadow-slate-300 "
            title="Linkedin"
          >
            <Link to="https://www.linkedin.com/feed/" target="_blank">
              <BsLinkedin size={24} />
            </Link>
          </li>
          <li
            className="px-2 py-2 bg-gray-300 rounded-full hover:bg-slate-200 shadow-lg shadow-slate-300 "
            title="github"
          >
            <Link to="https://github.com/RohitAmdahl" target="_blank">
              <BsGithub size={25} />
            </Link>
          </li>
          <li
            className="px-2 py-2 bg-gray-300 rounded-full  hover:bg-slate-200 shadow-lg shadow-slate-300 "
            title="Email"
          >
            <Link to="mailto:rohit_dsigner@outlook.com" target="_blank">
              <BsEnvelopeAt size={25} />
            </Link>
          </li>
          <li
            className="px-2 py-2 bg-gray-300 rounded-full hover:bg-slate-200 shadow-lg shadow-slate-300 "
            title="CV Pdf file"
          >
            <span className="">
              <AiOutlineFilePdf size={25} />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
