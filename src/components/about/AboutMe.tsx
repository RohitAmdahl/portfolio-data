import aboutPic from "../../assets/potrait.jpg";
const AboutMe = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <h1 className="font-philosopher text-3xl py-4 text-center">
        WHO M I, WHAT I DO, Enthusiast NERD.
      </h1>
      <div className="max-w-xs flex justify-between container mx-auto">
        <div>
          <img src={aboutPic} alt="" />
        </div>
        <div>
          <p> Hi, I'm Rohit kumar Amdahl. </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
