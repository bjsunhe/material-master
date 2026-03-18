import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";
import Callout from "../shared/Callout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ---------- Delivery Note Mock ---------- */
function DeliveryNote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl border-2 border-slate-200 p-5 font-mono text-[11px] leading-relaxed shadow-xl max-w-sm w-full"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-base font-black text-slate-800 tracking-tight">
            DELIVERY NOTE
          </div>
          <div className="text-slate-400 text-[10px]">Lieferschein Nr. 80142587</div>
        </div>
        <div className="text-right text-slate-400 text-[10px]">
          <div>2024-03-15</div>
          <div>Page 1/2</div>
        </div>
      </div>

      {/* Fields — the confusing part */}
      <div className="border-t border-slate-100 pt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-slate-500 mb-4">
        {[
          ["Order No:", "7200045891"],
          ["Customer Ref:", "REQ-2024-0312"],
          ["Delivery No:", "80142587"],
          ["PO Number:", "4500012045"],
          ["Vendor No:", "1030045892"],
          ["Ship-to:", "WH-DE-0042"],
        ].map(([label, val], i) => (
          <div key={i}>
            <span className="text-slate-300">{label}</span>{" "}
            <span className="font-semibold text-slate-600">{val}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="border-t border-slate-100 pt-3">
        <table className="w-full">
          <thead>
            <tr className="text-slate-400 text-[10px] border-b border-slate-50">
              <th className="text-left py-1 font-medium">Material No.</th>
              <th className="text-left py-1 font-medium">Description</th>
              <th className="text-left py-1 font-medium">CAS ID</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {[
              ["0843.KG1.008", "Blei (Lead)", "7439-92-1"],
              ["0291.CH3.014", "Cadmium", "7440-43-9"],
              ["0567.MX2.003", "Mercury", "7439-97-6"],
            ].map(([mat, desc, cas], i) => (
              <tr key={i} className="border-b border-slate-50/50">
                <td className="py-1.5 font-bold text-indigo-600">{mat}</td>
                <td className="py-1.5">{desc}</td>
                <td className="py-1.5">{cas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confusion callouts */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="absolute -right-3 top-[105px] flex flex-col gap-2"
      >
        {["Is this a material number?", "Or this one?", "What about this?"].map(
          (t, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
              className="bg-red-50 border border-red-200 rounded-lg px-2.5 py-1 text-[10px] text-red-600 font-medium shadow-sm whitespace-nowrap"
            >
              ⚠️ {t}
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------- Main Section ---------- */
export default function ChallengeSection() {
  return (
    <Section id="challenge" className="bg-slate-50">
      <SectionLabel number="01" emoji="😤" text="The Challenge" />

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-balance">
          A straightforward task that turned out to be anything but simple
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mb-12">
          Extract the association between{" "}
          <strong className="text-indigo-600">material numbers</strong> and{" "}
          <strong className="text-indigo-600">CAS IDs</strong> (hazardous
          chemical substance identifiers) from delivery note PDFs.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: explanation */}
        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                🎯 <span>The Naive Approach</span>
              </h4>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-emerald-400 leading-relaxed">
                <p className="text-slate-500"># Prompt to AI Vision Model</p>
                <p className="mt-1">
                  "Find the material numbers in this
                </p>
                <p>document, and for each material</p>
                <p>
                  number, find its CAS ID."
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Callout type="warning">
              <p className="font-bold text-lg mb-1">Result: 60% Accuracy</p>
              <p className="text-sm">
                The AI kept <strong>hallucinating</strong> — grabbing order
                numbers, delivery numbers, and customer references, mistaking
                them for material numbers. A delivery note has{" "}
                <strong>too many similar-looking number fields</strong> for the
                AI to distinguish without context.
              </p>
            </Callout>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-center gap-3 text-sm text-slate-500 bg-white rounded-xl p-4 border border-slate-200">
              <span className="text-2xl">🤖</span>
              <p>
                Without context, the model simply couldn't tell a{" "}
                <code className="bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded text-xs">
                  material number
                </code>{" "}
                from an{" "}
                <code className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-xs">
                  order number
                </code>{" "}
                or{" "}
                <code className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-xs">
                  delivery number
                </code>
                .
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: delivery note mock */}
        <Reveal delay={0.2} direction="right" className="flex justify-center">
          <DeliveryNote />
        </Reveal>
      </div>
    </Section>
  );
}