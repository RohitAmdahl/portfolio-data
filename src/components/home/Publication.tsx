import { Link } from "react-router-dom";
import PublicationImg from "../../assets/blogImg/publication.jpeg";
const Publication = () => {
  return (
    <div className="max-w-md container mx-auto p-4  border-2 border-gray-200 rounded-xl m-2 shadow-md">
      <div className="max-w-lg container mx-auto ">
        <img
          src={PublicationImg}
          alt="publication image from the blog article published by kode24, rohit has written the article on naming things is hard"
          className="max-w-md container mx-auto rotate-3 p-4 shadow-zinc-600 bg-backgroundColor rounded-xl"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">
          Published on: January 24, 2024
        </p>
        <Link
          to="https://www.kode24.no/artikkel/vanskelig-a-lage-gode-navn-synes-rohit-men-har-3-gode-tips/80865316"
          target="_blank"
          className="text-xl font-bold hover:underline hover:text-blue-700 transition duration-100"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Publication;
