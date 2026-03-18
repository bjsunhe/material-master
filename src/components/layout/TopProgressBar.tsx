import { motion } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";

export default function TopProgressBar() {
  const { scrollProgress } = useScrollContext();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
      style={{ scaleX: scrollProgress }}
    />
  );
}