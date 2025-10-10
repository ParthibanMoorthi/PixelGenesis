import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StarryBackground from "./components/StarryBackground";
import HomePage from "./components/Home/HomePage";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutPage from "./components/About/AboutPage";
import ServicePage from "./components/Service/ServicePage";
import CareerPage from "./components/Career/CareerPage";
import HeaderLink from "./components/HeaderLink";
import ContactPage from "./components/Contact/ContactPage";

function App() {
  return (
    <Router basename="/PixelGenesis">
      <div className="relative bg-black">
        <StarryBackground />
        <HeaderLink />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about/us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
