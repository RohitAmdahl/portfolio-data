const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" container mx-auto text-center max-w-4xl py-8   ">
        <a className="m-8" href="https://www.linkedin.com/feed/">
          Portfolio website created By
          <span className="font-bold"> &copy; Rohit kumar Amdahl, </span>
          <p className="font-bold">React, TypeScript, Tailwind CSS, Vite.</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
