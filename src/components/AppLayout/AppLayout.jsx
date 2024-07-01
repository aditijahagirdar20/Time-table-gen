import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default AppLayout;
