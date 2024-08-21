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
          <ul className="font-semibold">
            <li className="py-2">
              Pursuing a course in Backend Development with .NET at Noroff
            </li>
            <li>
              Internship | Designer & Frontend developer at
              <span role="link" className=" font-bold">
                <a
                  className="underline text-blue-700 hover:text-blue-900 transition duration-100"
                  href="https://cleanseasolutions.no"
                >
                  Clean Sea Solutions AS
                </a>
              </span>
            </li>
          </ul>

          {/* <p className="  py-2 text-lg font-semibold flex flex-wrap gap-2 ">
            Internship | Designer & Frontend developer at
          </p> */}

          <div className=" max-w-md text-lg mt-4 border-2 bg-gray-700 rounded-2xl">
            <p className=" px-4 text-lg py-2 flex items-center capitalize gap-2 justify-center text-white ">
              <MdOutlineWorkOutline size={25} /> open to new opportunities /
              Work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-[520px] w-full py-6 mt-8 gap-8">
          <div>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              title="LinkedIn"
              className="font-bold py-2 px-4 flex justify-center items-center gap-2   border-b-2 border-blue-500 text-sm "
            >
              <FaLinkedin size={22} /> Linkedin
            </a>
          </div>
          <div>
            <a
              href="mailto:rohit_dsigner@outlook.com"
              target="_blank"
              title="Email"
              className="font-bold py-2 px-4 flex justify-center items-center gap-2   border-b-2 border-blue-500 text-sm "
            >
              <MdOutlineEmail size={22} />
              Email
            </a>
          </div>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="py-4">
              I have bachelors in Accessory Design and later worked in
              architectural firms, drawing plans, and creating 3D animations.
            </li>
            <li>
              <strong>Goal:</strong> My aim is to become a fullstack developer.
              I am actively working towards this goal and have already started
              learning foundational concepts through my Backend course.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
