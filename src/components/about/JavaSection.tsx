import javaPic from "../../assets/aboutPic/java.jpg";

const JavaSection = () => {
  return (
    <>
      <div className="py-4">
        <div>
          <img
            className="max-w-4xl container mx-auto "
            src={javaPic}
            alt="code in java language picture"
          />
          <p className="text-md text-center font-light ">
            Java coding in IntelliJ, practising object-oriented programming.
          </p>
        </div>

        <h2 className="font-roboto text-xl py-4">
          You might have questions about WHY JAVA ?
        </h2>
        <p>
          I usually attend different meetups because I like to keep myself
          updated. I went to a JavaBin meetup where I found Java quite
          interesting. Although I couldn't fully understand the code during the
          presentation, I could relate it to JavaScript classes and made an
          effort to grasp the concepts. I spoke to many experienced Java
          developers and realized the importance of naming conventions in Java.
          This led me to decide that I want to learn Java, appreciating its ease
          of understanding and robust nature, with continuous updates over the
          years. Personally, I became a fan of object-oriented programming
          through Java, as it provides a structured and efficient way to
          organize code. This not only makes Java a practical choice but also an
          enjoyable one for anyone entering the world of programming.
        </p>
      </div>
      <div>
        <p>
          I also enjoy learning about Domain-Driven Design also know as in a
          short form DDD, Clean code, Agile development and Accessibility.
        </p>
      </div>
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
    </>
  );
};

export default JavaSection;
