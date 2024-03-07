import plan from "../../assets/aboutPic/plan.png";
import illustration from "../../assets/aboutPic/illustration.jpg";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <>
      <div className="p-4">
        <h2 className=" font-bold text-xl py-4">
          My background with Innovative Techniques
        </h2>
        <p>
          I have a strong background in architecture, with valuable experience
          gained from working in architecture firms. My specialization lies in
          creating plan drawings and 3D models using BIM (Building Information
          Modeling) software such as Autodesk Revit, AutoCAD, ArchiCAD, and
          Twinmotion. Additionally, I am proficient in using Architerra for
          generating 3D terrain, utilizing x and y coordinates based on the
          Norwegian maps coordinate system. Furthermore, I have leveraged
          cutting-edge technology, including drones like DJI Go, to fly over
          buildings and capture aerial data. With tools like DroneDeploy, I've
          transformed this data into detailed 3D models and conducted precise
          measurements, showcasing my passion for integrating technology into
          architectural practice.
        </p>

        <div className="py-4 flex justify-around flex-wrap items-center">
          <div>
            <figure>
              <img
                src={plan}
                alt="plan drawing that i create when i was working as Bim draftsman"
                className="max-w-4xl container mx-auto p-2"
              />
            </figure>
          </div>
          <div>
            <figure>
              <img
                src={illustration}
                alt="architectural illustration building model edit in photo shop"
                className="max-w-4xl container mx-auto p-2"
              />
              <figcaption className="text-md text-center font-light py-2">
                In past roles, I crafted detailed plan drawings and realistic 3D
                architectural renderings using Enscape, Archicad, and Photoshop.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="hover:underline text-center hover:text-blue-700 transition duration-100 py-4 font-bold underline">
        <Link
          target="_blank"
          className="text-xl"
          to="/src/assets/pdf/rohitPorfolio.pdf"
        >
          -- If you're interested in exploring my previous experience and work
          at architectural Company and what I accomplished during my time there,
          feel free to check out my architectural design portfolio.
        </Link>
      </div>
    </>
  );
};

export default Background;
