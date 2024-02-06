
import plan from "../../assets/aboutPic/plan.png";
import illustration from "../../assets/aboutPic/illustration.jpg";
const Background = () => {
  return (
    <>
      <div className="p-4">
        <div className="py-4">
          <h3 className="font-roboto text-xl py-4">My background</h3>
          <p>
            I have a strong background in architecture, with valuable experience
            gained from working in architecture firms. My specialization lies in
            creating plan drawings and 3D models using BIM (Building Information
            Modeling) software such as Autodesk Revit, AutoCAD, ArchiCAD, and
            Twinmotion. Additionally, I am proficient in using Architerra for
            generating 3D terrain, utilizing x and y coordinates based on the
            Norwegian maps coordinate system.
          </p>
        </div>
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
        example of my pervious work, i have created plan drawings and 3D
        Architectural rendering by using Enscape ,Archicad, and photoshop.
      </p>
    </>
  );
};

export default Background;
