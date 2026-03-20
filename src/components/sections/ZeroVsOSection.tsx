import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";

/* ---------- Animated 0/O Toggle ---------- */
function ZeroOToggle() {
  const [isZero, setIsZero] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIsZero((v) => !v), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-8 sm:gap-12 justify-center my-10">
      {/* Ambiguous */}
      <div className="text-center">
        <div className="w-24 h-24 rounded-2xl bg-red-50 border-2 border-red-200 flex items-center justify-center mb-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={isZero ? "0" : "O"}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="text-5xl font-mono text-slate-300"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              {isZero ? "0" : "O"}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="text-xs text-red-500 font-medium">
          Small font — which is it?
        </span>
      </div>

      {/* Arrow */}
      <div className="text-3xl text-slate-300">→</div>

      {/* Clear */}
      <div className="text-center">
        <div className="w-24 h-24 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-2">
          <span className="text-5xl font-black text-slate-800">0</span>
        </div>
        <span className="text-xs text-emerald-600 font-semibold">
          Bold & large — clearly "0"
        </span>
      </div>
    </div>
  );
}

/* ---------- Main Section ---------- */
export default function ZeroVsOSection() {
  return (
    <Section id="zero-vs-o" className="bg-slate-50">
      <SectionLabel number="04" emoji="🔍" text="The Devil in the Details" />

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-balance">
85% wasn't enough.        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mb-10">
           I examined every failure case — and found a very
          specific, very human pattern.
        </p>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* The finding */}
        <Reveal delay={0.1}>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-2xl">
                🔬
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  Failure Pattern Identified
                </h4>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">
                    0
                  </code> vs. {" "}
                  <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-bold">
                    O
                  </code>{" "}
                 
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <ZeroOToggle />

        {/* The fix narrative */}
        <Reveal delay={0.2}>
          <div className="relative pl-8 border-l-2 border-amber-300 space-y-5">
            <div className="relative">
              <div className="absolute -left-[25px] w-3.5 h-3.5 rounded-full bg-amber-400 border-4 border-slate-50" />
              <p className="text-lg italic text-slate-600 font-light">
                I went back to the warehouse — again.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[25px] w-3.5 h-3.5 rounded-full bg-amber-300 border-4 border-slate-50" />
              <p className="text-slate-500 leading-relaxed">
                {" "}
                <strong className="text-slate-700">
                  "Can we print the purchasing order number in a larger font,
                  and make it bold?"
                </strong>
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[25px] w-3.5 h-3.5 rounded-full bg-emerald-400 border-4 border-slate-50" />
              <p className="text-emerald-700 font-medium text-lg">
                The answer was yes. ✅
              </p>
            </div>
          </div>
        </Reveal>

        {/* Result */}
        <Reveal delay={0.3}>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
              Result
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-black">99%</div>
                <div className="text-[11px] text-blue-200/70">
                  PO Number Reading
                </div>
                <div className="text-[11px] text-emerald-300 font-semibold">
                  ↑ from 90%
                </div>
              </div>
              <span className="text-xl text-blue-300">×</span>
              <div className="text-center">
                <div className="text-3xl font-black">95%</div>
                <div className="text-[11px] text-blue-200/70">
                  CAS ID Matching
                </div>
              </div>
              <span className="text-xl text-blue-300">=</span>
              <div className="text-center bg-white/15 rounded-xl px-6 py-3">
                <div className="text-4xl font-black">94%</div>
                <div className="text-[11px] text-blue-200/70">
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