import MyAvatar from "../../assets/avatar_profile_.png";

import Project from "../projects/Project";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="m-10 text-text_ ">
        <div className=" flex justify-center flex-wrap items-center lg:grid lg:grid-cols-2 lg:max-w-5xl gap-2 mx-auto">
          <div className="mx-auto">
            <img
              src={MyAvatar}
              alt="my image"
              className="p-5 rounded-full max-w-picSize"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide pb-2 font-serif">
              Rohit Kumar Amdahl
            </h1>
            <h2 className="font-bold text-2xl tracking-wide pb-2 font-serif">
              Frontend Developer
            </h2>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default HomePage;
