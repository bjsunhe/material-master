import { motion } from "framer-motion";
import AnimatedCounter from "../shared/AnimatedCounter";

const tags = ["AI Vision", "SAP Integration", "AI-Native Business Process"];

const milestones = [
  { value: "60%", color: "bg-red-400", label: "Start" },
  { value: "85%", color: "bg-amber-400", label: "Context" },
  { value: "94%", color: "bg-indigo-400", label: "Font Fix" },
  { value: "95%", color: "bg-emerald-400", label: "Validation" },
];

const floaters = [
  { emoji: "📦", cls: "top-16 left-[10%]", dur: 6, delay: 0 },
  { emoji: "📄", cls: "top-32 right-[15%]", dur: 5, delay: 1 },
  { emoji: "🏭", cls: "bottom-32 left-[20%]", dur: 7, delay: 2 },
  { emoji: "🔬", cls: "bottom-24 right-[10%]", dur: 5.5, delay: 0.5 },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-900"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 grid-dots" />

      {/* Floating emoji */}
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: f.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.delay,
          }}
          className={`absolute text-5xl opacity-[0.12] select-none ${f.cls}`}
        >
          {f.emoji}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="px-3 py-1 rounded-full bg-white/[0.07] text-indigo-200/80 text-xs font-medium backdrop-blur-sm border border-white/[0.08]"
            >
              {tag}
            </motion.span>
          ))}
        </div>

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

        <p className="text-lg sm:text-xl md:text-2xl text-indigo-200/90 mb-3 font-light">
          Engineering AI Accuracy on the Warehouse Floor
        </p>
        <p className="text-sm sm:text-base text-indigo-300/50 max-w-2xl mx-auto mb-14 leading-relaxed">
          How walking away from my desk — and into the warehouse — transformed
          an unreliable AI system into a production-ready solution for SAP
          logistics document automation.
        </p>

        {/* Mini milestones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.15 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="text-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${m.color} mx-auto mb-1.5`}
                />
                <span className="text-white font-bold text-sm block">
                  {m.value}
                </span>
                <span className="text-indigo-400/60 text-[10px]">
                  {m.label}
                </span>
              </div>
              {i < milestones.length - 1 && (
                <span className="text-indigo-600 text-[10px] mt-[-8px]">→</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-2 text-indigo-300/60"
        >
          <span className="text-xs tracking-wide">Scroll to read the story</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}