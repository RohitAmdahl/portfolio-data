import Navbar from "./Navbar";
const Header: React.FC = () => {
  return (
    <header className=" w-full pb-5 ">
      <div className="container mx-auto max-w-3xl items-center  ">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
