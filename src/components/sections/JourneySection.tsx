import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";
import { STAGES } from "../../data/constants";

/* ---------- Stage Card ---------- */
function StageCard({
  stage,
  index,
}: {
  stage: (typeof STAGES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative bg-white rounded-2xl border-2 border-slate-100 p-6 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Stage number */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: stage.color }}
        >
          Stage {stage.stage}
        </span>
        <span
          className="text-3xl font-black"
          style={{ color: stage.color }}
        >
          {stage.accuracy}%
        </span>
      </div>

      <h4 className="font-bold text-slate-900 mb-1">{stage.title}</h4>
      <p className="text-xs text-slate-400 mb-3">{stage.subtitle}</p>
      <p className="text-sm text-slate-500 leading-relaxed">{stage.insight}</p>

      {/* Progress bar */}
      <div className="mt-5 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: stage.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${stage.accuracy}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.12 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ---------- Flow Diagram ---------- */
const flowSteps = [
  { emoji: "📄", label: "PDF Input", sub: "Delivery note" },
  { emoji: "🤖", label: "AI reads label", sub: "PO number" },
  { emoji: "🗄️", label: "SAP Query", sub: "Material list" },
  { emoji: "🧠", label: "AI matches", sub: "Mat → CAS" },
  { emoji: "🛡️", label: "SAP Validates", sub: "Error check" },
  { emoji: "📊", label: "Output", sub: "95% accurate" },
];

function FlowDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-10"
    >
      {flowSteps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="flex flex-col items-center bg-white border-2 border-slate-100 rounded-xl p-3 min-w-[80px] sm:min-w-[100px] hover:border-indigo-300 hover:shadow-md transition-all">
            <span className="text-xl sm:text-2xl mb-1">{step.emoji}</span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-800 text-center leading-tight">
              {step.label}
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 text-center">
              {step.sub}
            </span>
          </div>
          {i < flowSteps.length - 1 && (
            <span className="text-slate-300 text-sm">→</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- Main Section ---------- */
export default function JourneySection() {
  return (
    <Section id="journey" dark className="bg-gradient-to-b from-slate-900 to-slate-950">
      <SectionLabel number="06" emoji="📈" text="The Journey" dark />

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3 text-balance">
          Four stages, four different types of improvements
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mb-12">
          Each breakthrough came from a different discipline — observation,
          analysis, collaboration, and systems thinking.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAGES.map((stage, i) => (
          <StageCard key={i} stage={stage} index={i} />
        ))}
      </div>
{/* 
      <Reveal className="mt-16">
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          Final Architecture
        </h3>
        <p className="text-sm text-slate-500 text-center mb-4">
          The complete pipeline from input to validated output
        </p>
        <FlowDiagram />
      </Reveal> */}
    </Section>
  );
}