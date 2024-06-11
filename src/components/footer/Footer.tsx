const Footer: React.FC = () => {
  return (
    <footer className="pt-10">
      <div className=" text-center">
        <span className="font-bold"> &copy; Rohit kumar Amdahl, </span>
        <span>{new Date().getFullYear()} </span>
      </div>
    </footer>
  );
};

export default Footer;
