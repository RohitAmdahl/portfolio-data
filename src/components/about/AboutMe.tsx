import { Link } from "react-router-dom";
// import JavaSection from "./JavaSection";
import Background from "./Background";

const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto text lg ">
      <div className="font-sixtyfour">
        <h1 className="text-3xl text-center py-4 ">About me</h1>
      </div>

      <div className=" p-4 ">
        <p className="pb-4">
          I am a dedicated Frontend Developer based in oslo, Norway. I have a
          passion for coding and sharing knowledge.thats why I love to write
          articles and share my knowledge.when i wrote my first article, naming
          things is hard i found its good to express what i feel about coding
          and naming conventions in programming languages.
        </p>
        <p>
          I gained various skills at Noroff school, including HTML, CSS,
          JavaScript, TypeScript, React.js, Tailwind CSS, Sass, Bootstrap, and
          Vite. I've also mastered using Netlify for deployment and learned
          about Git and GitHub for version control. Additionally, I've developed
          proficiency in creating websites without coding using WordPress. I
          have also gained good knowledge and have used Jest and Cypress for
          testing.
        </p>
        <div className="p-4">
          <Link
            className="hover:underline text-blue-700 transition duration-100"
            to="https://www.linkedin.com/pulse/naming-things-hard-rohit-kumar-amdahl-wwlzf/"
          >
            - Naming Things Is Hard:- english version of this article
          </Link>
          <div>
            <Link
              className="hover:underline text-blue-700 transition duration-100"
              to="https://www.kode24.no/artikkel/vanskelig-a-lage-gode-navn-synes-rohit-men-har-3-gode-tips/80865316"
            >
              - Naming Things Is Hard:- norwegian version of this article by
              Kode 24.
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <JavaSection />
      </div> */}
      <div>
        <Background />
      </div>
    </div>
  );
};

export default AboutMe;
