import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      },
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-10 scale-[0.98] opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
