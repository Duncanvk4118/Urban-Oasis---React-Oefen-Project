import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
