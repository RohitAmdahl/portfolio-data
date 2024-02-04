import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" container mx-auto text-center max-w-4xl py-8   ">
        <Link
          to={"https://www.linkedin.com/feed/"}
          className="hover:underline m-8"
        >
          Portfolio website created By
          <span className="font-bold"> &copy; Rohit kumar Amdahl, </span>
        </Link>
        <p className="font-bold">React, TypeScript, Tailwind CSS, Vite.</p>
        <span>{new Date().getFullYear()} </span>
      </div>
    </div>
  );
};

export default Footer;
