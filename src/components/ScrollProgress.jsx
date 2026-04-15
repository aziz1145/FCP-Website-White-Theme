import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[100] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
