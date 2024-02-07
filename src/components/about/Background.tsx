import plan from "../../assets/aboutPic/plan.png";
import illustration from "../../assets/aboutPic/illustration.jpg";
const Background = () => {
  return (
    <>
      <div className="p-4">
        <h3 className="font-roboto text-xl py-4">
          My background with Innovative Techniques
        </h3>
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
            <img
              src={plan}
              alt="plan drawing that i create when i was working as Bim draftsman"
              className="max-w-md container mx-auto p-2"
            />
          </div>
          <div>
            <img
              src={illustration}
              alt="architectural illustration building model edit in photo shop"
              className="max-w-md container mx-auto p-2"
            />
          </div>
        </div>
      </div>
      <p className="text-md text-center font-light py-2">
        In past roles, I crafted detailed plan drawings and realistic 3D
        architectural renderings using Enscape, Archicad, and Photoshop.
      </p>
    </>
  );
};

export default Background;
