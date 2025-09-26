// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarryBackground from "./components/StarryBackground";
import HomePage from "./components/Home/HomePage";
import Header from "./components/Header";

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
