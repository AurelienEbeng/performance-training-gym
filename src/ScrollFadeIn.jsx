import { useEffect, useRef } from "react";

const ScrollFadeIn = ({ children, style }) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if section is on the viewport
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("animate-fade-in");
        } else {
          ref.current.classList.remove("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 ${style}`}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
