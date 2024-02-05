import { Link } from "react-router-dom";
import JavaSection from "./JavaSection";

const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto text lg ">
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
              to="/https://www.linkedin.com/pulse/naming-things-hard-rohit-kumar-amdahl-wwlzf/"
            >
              - Naming Things Is Hard:- english version of this article
            </Link>
          </p>
          <p>
            <Link
              className="hover:underline text-blue-700 transition duration-100"
              to={
                "/https://www.kode24.no/artikkel/vanskelig-a-lage-gode-navn-synes-rohit-men-har-3-gode-tips/80865316"
              }
            >
              - Naming Things Is Hard:- norwegian version of this article by
              Kode 24.
            </Link>
          </p>
          <p className="py-4">
            I learned a bunch of cool stuff at Noroff school, like HTML, CSS,
            JavaScript, TypeScript, React.js, Tailwind CSS, Sass, Bootstrap, and
            Vite. I also got the hang of using Netlify for deploying, and I
            learned about Git and GitHub for keeping track of my code changes.
            Now, I'm taking it a step further by teaching myself even more, with
            a special focus on becoming a certified Java SE 17 developer.
          </p>
          {/* <p>
            My background includes valuable experience from architecture firms,
            where I specialized in creating plan drawings, and 3D models through
            BIM (Building Information Modeling) softwares like Autodesk Revit,
            AutoCAD, ArchiCad.
          </p> */}
        </p>
      </div>
      <div>
        <JavaSection />
      </div>
    </div>
  );
};

export default AboutMe;

{
  /* <p>
  <ul>
    <li>banner picture and write about my work</li>
    <li>java code picture and text about java</li>
    <li>books i ma reading and learning new things</li>
    <li>always learning and sharing knowledge is my passion</li>
    <li>my new website persnal porfolio</li>
  </ul>
</p>; */
}
