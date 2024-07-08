import { Link } from "react-router-dom";
import firma from "../../assets/logo_firma.png";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";
const InfoSection = () => {
  return (
    <div className="max-w-4xl container mx-auto   text-textColor">
      <div className="py-2 px-4">
        <div>
          <h1 className="font-bold text-4xl pt-2  font-serif">
            Rohit Kumar Amdahl
            <span className=" font-semibold text-lg px-2">Oslo, Norway.</span>
          </h1>
          <p className="  py-2 text-lg font-semibold flex flex-wrap gap-4 ">
            Internship | Designer & Frontend developer at
            <span role="link" className="px-1 font-bold">
              <a
                className="underline text-blue-700 hover:text-blue-900 transition duration-100"
                href="https://cleanseasolutions.no"
              >
                Clean Sea Solutions AS
              </a>
            </span>
            <img
              className="max-w-[100px]"
              src={firma}
              alt="company logo clean sea solutions"
            />
          </p>

          <div className=" max-w-sm mt-4 text-lg  bg-primary rounded-2xl">
            <p className=" px-4 text-lg py-2 capitalize flex text-pink-100  gap-2 items-center">
              {" "}
              <MdOutlineWorkOutline size={20} /> open to new opportunities /
              Work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[520px] w-full  py-6 ">
          <div>
            <Link
              to="https://www.linkedin.com/feed/"
              target="_blank"
              title="LinkedIn"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm "
            >
              <FaLinkedin size={22} /> Linkedin
            </Link>
          </div>
          <div>
            <a
              href="mailto:rohit_dsigner@outlook.com"
              target="_blank"
              title="Email"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center items-center gap-2 rounded-xl shadow-shadow hover:shadow-inner duration-75 ease-in-out shadow-black ring-4 ring-blue-500 text-sm"
            >
              <MdOutlineEmail size={22} />
              Email
            </a>
          </div>
        </div>
        <div className="py-4">
          <p>
            Welcome to my website! I'm a dedicated Frontend Developer based in
            Oslo, Norway, currently expanding my expertise in Java and delving
            into the world of object-oriented programming. In 2021, I began a
            two-year journey into Frontend Development at Noroff. I love coding
            and expressing that love through writing.I write about different
            topics, aiming to make them easy for everyone to understand. Sharing
            knowledge is important to me, and I enjoy learning from other
            programmers.
          </p>
          <p className="py-4">
            I have bachelors in Accessory Design and later worked in
            architectural firms, drawing plans, and creating 3D animations.
          </p>
          <p>
            I gained various skills at Noroff school, including HTML, CSS,
            JavaScript, TypeScript, React.js, Tailwind CSS, Sass, Bootstrap, and
            Vite. I've also mastered using Netlify for deployment and learned
            about Git and GitHub for version control. Additionally, I've
            developed proficiency in creating websites without coding using
            WordPress. I have also gained good knowledge and have used Jest and
            Cypress for testing.
          </p>
          <ul className="py-4 space-y-2">
            <li>
              <strong>Backend Development with .NET (Part-Time)</strong>, Noroff
              (Starting August 19, 2024) Enrolling in a part-time course in
              backend development with .NET to build skills in fullstack
              development.
            </li>
            <li>
              <strong>Goal:</strong> My aim is to become a fullstack developer.
              I am actively working towards this goal and have already started
              learning foundational concepts through YouTube and other
              resources.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
