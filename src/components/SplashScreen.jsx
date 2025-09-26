// SplashScreen.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import saturn from "../../src/assets/saturn.svg";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative z-10 flex items-center justify-center w-screen h-screen overflow-hidden">
      <img src={saturn} alt="splash" className="w-[180vw] h-auto object-contain" />
    </div>
  );
}
