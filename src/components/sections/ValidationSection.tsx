import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";

/* ---------- Validation Flow Diagram ---------- */
function ValidationFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="max-w-md mx-auto my-10 space-y-3">
      {/* Step 1: AI */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0 }}
        className="bg-white border-2 border-slate-200 rounded-xl p-4 text-center"
      >
        <span className="text-2xl">🤖</span>
        <p className="text-sm font-bold text-slate-800 mt-1">
          AI extracts PO Number
        </p>
        <p className="text-xs text-slate-400 font-mono mt-1">
          → "4500012045"
        </p>
      </motion.div>

      <div className="flex justify-center">
        <div className="w-0.5 h-5 bg-slate-200" />
      </div>

      {/* Step 2: SAP */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 text-center"
      >
        <span className="text-2xl">🗄️</span>
        <p className="text-sm font-bold text-indigo-700 mt-1">
          SAP Validation Query
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Does this PO number exist?
        </p>
      </motion.div>

      <div className="flex justify-center">
        <div className="w-0.5 h-5 bg-slate-200" />
      </div>

      {/* Step 3: Branch */}
      <div className="flex justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring" }}
          className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4 text-center min-w-[120px]"
        >
          <span className="text-2xl">✅</span>
          <p className="text-xs font-bold text-emerald-700 mt-1">Valid</p>
          <p className="text-[10px] text-emerald-500">Auto-process</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.65, type: "spring" }}
          className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 text-center min-w-[120px]"
        >
          <span className="text-2xl">⚠️</span>
          <p className="text-xs font-bold text-amber-700 mt-1">Invalid</p>
          <p className="text-[10px] text-amber-500">Human review</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Main Section ---------- */
export default function ValidationSection() {
  return (
    <Section id="validation">
      <SectionLabel number="05" emoji="🛡️" text="The Final Mile" />

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-balance">
          Push the PO accuracy to 100%
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mb-10">
          The users were satisfied with 99%, but I wasn't done. 
        </p>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-8">
        <Reveal delay={0.1}>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl">
                💡
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  The Realization
                </h4>
                <p className="text-slate-600 mt-2 leading-relaxed">
          SAP isn't just a data source — it's a <strong>validation layer.</strong>
                </p>
                {/* <p className="text-slate-500 mt-3 leading-relaxed text-sm">
                  If the AI reads{" "}
                  <code className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded">
                    4500012O45
                  </code>{" "}
                  instead of{" "}
                  <code className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">
                    4500012045
                  </code>
                  , SAP returns an error. The PO number simply won't exist.
                </p> */}
              </div>
            </div>
          </div>
        </Reveal>

        <ValidationFlow />

        {/* Two outcomes */}
        <Reveal delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">✅</span>
                <h4 className="font-bold text-emerald-800">Valid PO Numbers</h4>
              </div>
              <p className="text-sm text-emerald-700">
                Flow through automatically with high confidence. No human
                intervention needed.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚠️</span>
                <h4 className="font-bold text-amber-800">Invalid PO Numbers</h4>
              </div>
              <p className="text-sm text-amber-700">
                Caught and routed to human review. No bad data enters the
                system.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Final result */}
        <Reveal delay={0.3}>
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-4">
              Final Result
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-black">100%</div>
                <div className="text-[11px] text-emerald-200/70">
                  PO Number (validated)
                </div>
                <div className="text-[11px] text-emerald-100 font-semibold">
                  ↑ from 99%
                </div>
              </div>
              <span className="text-xl text-emerald-300">×</span>
              <div className="text-center">
                <div className="text-3xl font-black">95%</div>
                <div className="text-[11px] text-emerald-200/70">
                  CAS ID Matching
                </div>
              </div>
              <span className="text-xl text-emerald-300">=</span>
              <div className="text-center bg-white/20 rounded-xl px-6 py-3">
                <div className="text-5xl font-black">95%</div>
                <div className="text-[11px] text-emerald-200/70">
                  Overall Accuracy
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}