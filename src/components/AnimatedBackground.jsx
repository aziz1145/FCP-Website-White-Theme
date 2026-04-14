const stars = Array.from({ length: 55 }, (_, index) => ({
  id: index,
  size: Math.random() * 3 + 1,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: `${Math.random() * 6 + 5}s`,
  delay: `${Math.random() * 8}s`,
  driftX: `${Math.random() * 180 - 90}px`,
  driftY: `${Math.random() * 140 - 70}px`,
  opacity: Math.random() * 0.5 + 0.2,
}));

const glows = [
  { size: 220, left: "8%", top: "70%", duration: "20s", delay: "0s" },
  { size: 180, left: "24%", top: "18%", duration: "24s", delay: "3s" },
  { size: 260, left: "60%", top: "58%", duration: "26s", delay: "1s" },
  { size: 170, left: "82%", top: "20%", duration: "22s", delay: "4s" },
];

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.06),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.04),transparent_28%),linear-gradient(to_bottom,#000000,#030303,#000000)]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full animate-starDrift"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animationDuration: star.duration,
            animationDelay: star.delay,
            boxShadow: "0 0 8px var(--star)",
            background: "var(--star)",
            ["--drift-x"]: star.driftX,
            ["--drift-y"]: star.driftY,
          }}
        />
      ))}

      {glows.map((glow, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-green-400/5 blur-3xl animate-glowDrift"
          style={{
            width: `${glow.size}px`,
            height: `${glow.size}px`,
            left: glow.left,
            top: glow.top,
            animationDuration: glow.duration,
            animationDelay: glow.delay,
            boxShadow: "0 0 90px rgba(34,197,94,0.08)",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
