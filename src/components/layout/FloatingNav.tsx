import { motion } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";
import { SECTIONS } from "../../data/constants";

export default function FloatingNav() {
  const { activeSection, scrollProgress } = useScrollContext();

  if (scrollProgress < 0.03) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-1.5"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-2.5 py-0.5"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span
              className={`text-[11px] font-medium transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-indigo-600 translate-x-0"
                  : "opacity-0 group-hover:opacity-100 text-gray-400 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-indigo-600 shadow-lg shadow-indigo-200"
                  : "w-1.5 h-1.5 bg-gray-300 group-hover:bg-indigo-400 group-hover:w-2 group-hover:h-2"
              }`}
            />
          </a>
        );
      })}
    </motion.nav>
  );
}