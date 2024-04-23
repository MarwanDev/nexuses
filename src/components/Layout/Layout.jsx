import { Navbar, Footer } from "../../components";
import { Route, Routes } from "react-router-dom";
import { Doctors, MedHistory, Explore } from "../../pages";

const Layout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/med-history" element={<MedHistory />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
