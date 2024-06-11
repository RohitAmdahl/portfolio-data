import { blogs, Blog } from "../../helpers/blog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ArticlePage: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="text-3xl ">
        <h1 className="py-4 text-center">Articles</h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          type: "string",
          duration: 0.9,
        }}
        className="container mx-auto max-w-5xl lg:grid lg:grid-cols-2 flex flex-wrap lg:gap-4 p-6"
      >
        {blogs.map((article: Blog) => (
          <div
            key={article.id}
            className="max-w-sm container mx-auto p-4 shadow-lg border-2 border-gray-200 rounded-xl m-2"
          >
            <img src={article.imageUrl} alt={article.alt} className="w-full" />
            <div>
              <p className=" font-roboto text-2xl font-bold py-4">
                {article.title}
              </p>
            </div>
            <p>{article.description}</p>
            <div className="flex justify-between items-center p-2">
              <div className=" font-roboto text-lg font-bold py-4">
                <p>Article by:</p>
              </div>
              <p className=" font-roboto text-lg font-bold py-4">
                {article.authorName}
              </p>
              <img
                className="h-12 w-12 rounded-full ring-2 ring-white"
                src={article.authorAvatar}
                alt={article.authorName}
              />
            </div>
            <Link
              className="text-xl hover:underline hover:text-blue-700 transition duration-100"
              to={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </Link>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ArticlePage;
