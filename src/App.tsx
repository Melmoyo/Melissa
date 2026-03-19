import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
