import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
