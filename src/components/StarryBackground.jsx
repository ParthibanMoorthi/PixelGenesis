// StarryBackground.jsx
export default function StarryBackground() {
  return (
<<<<<<< HEAD
    <div className="absolute inset-0 z-0 overflow-hidden">
=======
   <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
      {[...Array(500)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 1 + 1}px`,
            height: `${Math.random() * 1 + 1}px`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );
}
