import { Link } from "react-router-dom";
import JavaSection from "./JavaSection";

const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto text lg p-2 ">
      <div>
        <h1 className="text-3xl font-sixtyfour pt-4 text-center ">About me</h1>
      </div>
      <div>
        <p className=" py-4 ">
          I am a dedicated Frontend Developer based in oslo, Norway. I have a
          passion for coding and sharing knowledge.thats why I love to write
          articles and share my knowledge.when i wrote my first article,about
          naming things is hard i found my self its a way to express what i fell
          about coding and naming conventions in programming languages.
          <p>
            <Link
              className="hover:underline text-blue-700 transition duration-100"
              to="https://www.linkedin.com/pulse/naming-things-hard-rohit-kumar-amdahl-wwlzf/"
            >
              - Naming Things Is Hard:- english version of this article
            </Link>
          </p>
          <p>
            <Link
              className="hover:underline text-blue-700 transition duration-100"
              to="https://www.kode24.no/artikkel/vanskelig-a-lage-gode-navn-synes-rohit-men-har-3-gode-tips/80865316"
            >
              - Naming Things Is Hard:- norwegian version of this article by
              Kode 24.
            </Link>
          </p>
          <p className="py-4">
            I gained various skills at Noroff school, including HTML, CSS,
            JavaScript, TypeScript, React.js, Tailwind CSS, Sass, Bootstrap, and
            Vite. I've also mastered using Netlify for deployment and learned
            about Git and GitHub for version control. Additionally, I've
            developed proficiency in creating websites without coding using
            WordPress. I'm expanding my knowledge by self-teaching, focusing on
            achieving certification as a Java SE 17 developer. I'm following the
            OCP Java SE 17 certification book, to become a professional Java
            developer.
          </p>
        </p>
      </div>
      <div>
        <JavaSection />
      </div>
    </div>
  );
};

export default AboutMe;
