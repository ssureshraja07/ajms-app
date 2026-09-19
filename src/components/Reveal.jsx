import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Small delay so the browser finishes initial page rendering
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      observer.observe(element);

      // If the element is already visible when the page loads,
      // trigger the animation immediately.
      const rect = element.getBoundingClientRect();

      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {
        setVisible(true);
        observer.unobserve(element);
      }

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const hidden =
    direction === "left"
      ? "opacity-0 -translate-x-10"
      : direction === "right"
        ? "opacity-0 translate-x-10"
        : "opacity-0 translate-y-10";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transform-gpu
        transition-all
        duration-700
        ease-out
        ${
          visible
            ? "translate-x-0 translate-y-0 opacity-100"
            : hidden
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}