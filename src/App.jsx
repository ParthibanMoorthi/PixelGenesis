import { HashRouter as Router, Routes, Route } from "react-router-dom";
import StarryBackground from "./components/StarryBackground";
import HomePage from "./components/Home/HomePage";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="relative bg-black">
      <StarryBackground />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
