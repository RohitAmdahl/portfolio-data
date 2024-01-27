import myPic from "../../assets/rohitImg.jpg";

// import Project from "../projects/Project";

const HomePage: React.FC = () => {
  return (
    <>
      <section className="relative">
        <div className=" max-w-md container mx-auto">
          <img
            src={myPic}
            alt="profile picture of rohit kumar amdahl in the picture he is smiling and looks very happy, he seems kind person"
            className=" rounded-br-[120px] rounded-tl-[120px] p-1 border-dashed border-4 border-black hover:border-dotted hover:border-4 hover:border-backgroundColor transition duration-300"
          />
        </div>
        <h1 className="font-Philosopher text-3xl py-4 text-center">
          Frontend Developer, Code Enthusiast, Article Author
        </h1>
        <p className="font-sans text-xl py-2 mx-auto max-w-md text-center">
          Passionate about sharing coding knowledge and dedicated to crafting
          accessible products.
        </p>
      </section>

      {/* <Project /> */}
    </>
  );
};

export default HomePage;
