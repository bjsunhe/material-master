import { motion } from "framer-motion";
import AnimatedCounter from "../shared/AnimatedCounter";

const milestones = [
  { value: "60%", color: "bg-red-400", label: "Start" },
  { value: "85%", color: "bg-amber-400", label: "Context" },
  { value: "94%", color: "bg-indigo-400", label: "Font Fix" },
  { value: "95%", color: "bg-emerald-400", label: "Validation" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-900"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 grid-dots" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] text-balance">
          From{" "}
          <span className="text-red-400 line-through decoration-red-400/40 decoration-[3px]">
            60%
          </span>{" "}
          to{" "}
          <span className="text-emerald-400">
            <AnimatedCounter target={95} duration={2.5} />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-indigo-200/90 mb-16 font-light">
          How leaving my desk for the warehouse helped me
        </p>

        {/* Mini milestones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.15 }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <div className="text-center">
                <div
                  className={`w-3.5 h-3.5 rounded-full ${m.color} mx-auto mb-2 shadow-lg shadow-current/20`}
                />
                <span className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl block tracking-tight">
                  {m.value}
                </span>
                <span className="text-indigo-300/70 text-xs sm:text-sm font-medium tracking-wide mt-1 block">
                  {m.label}
                </span>
              </div>
              {i < milestones.length - 1 && (
                <span className="text-indigo-400/60 text-lg sm:text-xl font-light mt-[-4px]">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}