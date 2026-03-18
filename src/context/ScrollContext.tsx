import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SECTIONS } from "../data/constants";

interface ScrollContextType {
  activeSection: string;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType>({
  activeSection: "hero",
  scrollProgress: 0,
});

export const useScrollContext = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => setScrollProgress(v));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
}