const stars = Array.from({ length: 90 }, (_, index) => ({
  id: index,
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  parallax: Math.random() * 0.3 + 0.1,
  left: `${Math.random() * 100}%`,
  duration: `${Math.random() * 3 + 2.5}s`,
  delay: `${Math.random() * 5}s`,
  driftX: `${Math.random() * 80 - 40}px`,
  driftY: `${Math.random() * 60 - 30}px`,
}));

const glows = [
  { size: 220, left: "8%", top: "70%", duration: "20s", delay: "0s" },
  { size: 180, left: "24%", top: "18%", duration: "24s", delay: "3s" },
  { size: 260, left: "60%", top: "58%", duration: "26s", delay: "1s" },
  { size: 170, left: "82%", top: "20%", duration: "22s", delay: "4s" },
];

// NEW: floating blobs
const blobs = [
  { size: 400, left: "10%", top: "20%", duration: "30s" },
  { size: 350, left: "70%", top: "30%", duration: "35s" },
  { size: 300, left: "40%", top: "70%", duration: "28s" },
];

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#e2e8f0,#cbd5e1,#94a3b8)]" />
      {/* Floating Blobs (NEW) */}
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-[120px] opacity-10 animate-blobMove"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: blob.left,
            top: blob.top,
            background:
              "radial-gradient(circle, rgba(34,197,94, 0.30), transparent 70%)",
            animationDuration: blob.duration,
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-starDrift"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            background: "rgba(15, 23, 42, 0.55)",
            boxShadow: "0 0 12px rgba(15, 23, 42, 0.35)",
            animationDuration: star.duration,
            animationDelay: star.delay,
            "--drift-x": star.driftX,
            "--drift-y": star.driftY,
          }}
        />
      ))}

      {/* Glow particles */}
      {glows.map((glow, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-glowDrift bg-green-400/10 blur-3xl"
          style={{
            width: `${glow.size}px`,
            height: `${glow.size}px`,
            left: glow.left,
            top: glow.top,
            animationDuration: glow.duration,
            animationDelay: glow.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
