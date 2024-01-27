import myPic from "../../assets/rohitImg.jpg";

// import Project from "../projects/Project";

const HomePage: React.FC = () => {
  return (
    <>
      <section className="">
        <div className=" max-w-md container mx-auto ">
          <img
            src={myPic}
            alt="profile picture of rohit kumar amdahl in the picture he is smiling and looks very happy, he seems kind person"
            className=""
          />
          <div className=" "></div>
        </div>
      </section>

      {/* <Project /> */}
    </>
  );
};

export default HomePage;
