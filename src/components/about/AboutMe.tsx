import Background from "./Background";

const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto text lg ">
      <div>
        <h1 className="text-3xl text-center py-4 ">About me</h1>
      </div>
      <div className=" p-4 ">
        <p className="pb-4">
          I'm a dedicated Frontend Developer based in Oslo, Norway, and I'm
          currently on the path to becoming a Fullstack Developer after
          completing my Backend course. I'm expanding my expertise in C# and
          delving deeper into object-oriented programming. In 2021, I embarked
          on a two-year journey into Frontend Development at Noroff. Sharing
          knowledge is important to me, and I enjoy learning from other
          programmers.🚀 I have bachelors in Accessory Design and later worked
          in architectural firms, drawing plans, and creating 3D animations.
        </p>
        <p>
          I gained various skills at Noroff school, including HTML, CSS,
          JavaScript, TypeScript, React.js, Tailwind CSS, Sass, Bootstrap, and
          Vite. I've also mastered using Netlify for deployment and learned
          about Git and GitHub for version control. Additionally, I've developed
          proficiency in creating websites without coding using WordPress. I
          have also gained good knowledge/understanding and have used Jest and
          Cypress for testing.
        </p>
      </div>
      <div>
        <Background />
      </div>
    </div>
  );
};

export default AboutMe;
