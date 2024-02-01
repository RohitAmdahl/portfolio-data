import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="m-10 text-text_ ">
        <div className="  max-w-2xl container mx-auto p-10 font-bold">
          <p className="text-2xl text-center">
            Exciting Changes Underway! This site is currently undergoing
            renovations to bring you an even better experience. Stay tuned!
          </p>
        </div>
      </div>

      <div className="text-white container mx-auto max-w-2xl  flex flex-col justify-center items-center ">
        <div className="border-b-2 border-blue-500 pb-4 text-lg">
          <p className="py-1">
            <Link
              className=" px-2 text-link font-semibold hover:underline hover:italic"
              to="https://github.com/RohitAmdahl"
              target="_blank"
            >
              GitHub Link. 🎨💻,. 🚀
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
