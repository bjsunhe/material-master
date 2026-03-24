import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";

/* ---------- Barcode Label ---------- */
function BarcodeLabel({ bold = false }: { bold?: boolean }) {
  return (
    <div className="bg-white border-2 border-indigo-400 rounded-lg p-2.5 shadow-lg inline-block">
      {/* Barcode lines */}
      <div className="flex gap-[2px] justify-center mb-1.5">
        {Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-[0.5px]"
            style={{
              width: Math.random() > 0.5 ? 2 : 1,
              height: Math.random() * 14 + 10,
            }}
          />
        ))}
      </div>
      <div
        className={`text-center font-mono ${
          bold
            ? "text-sm font-black text-indigo-700"
            : "text-[10px] font-normal text-slate-600"
        }`}
      >
        PO: 4500012045
      </div>
    </div>
  );
}

/* ---------- Delivery Note with Label ---------- */
function DeliveryNoteWithLabel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl border-2 border-slate-200 p-5 font-mono text-[11px] shadow-xl max-w-sm w-full"
    >
      {/* Barcode label — upper left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        className="absolute -top-4 -left-4 z-10 ring-4 ring-indigo-200/50"
        style={{ borderRadius: 8 }}
      >
        <BarcodeLabel bold />
      </motion.div>

      {/* Simplified note content */}
      <div className="ml-24 mb-3">
        <div className="text-base font-black text-slate-800">DELIVERY NOTE</div>
        <div className="text-slate-400 text-[10px]">Nr. 80142587</div>
      </div>

      <div className="border-t border-slate-100 pt-3">
        <table className="w-full">
          <thead>
            <tr className="text-slate-400 text-[10px]">
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
            ].map(([m, d, c], i) => (
              <tr key={i} className="border-b border-slate-50/50">
                <td className="py-1.5 font-bold text-indigo-600">{m}</td>
                <td className="py-1.5">{d}</td>
                <td className="py-1.5">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Arrow pointing to label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute -top-10 left-28 text-indigo-500 text-xs font-semibold flex items-center gap-1"
      >
        <span>← The goldmine</span> <span className="text-lg">🏆</span>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Timeline Narrative ---------- */
const narrative = [

  {
    color: "bg-indigo-400",
    ring: false,
    text: (
      <p className="text-slate-400 leading-relaxed">
        I went to the warehouse.
      </p>
    ),
  },
  {
    color: "bg-indigo-400",
    ring: false,
    text: (
      <p className="text-slate-400 leading-relaxed">
        I walked into the receiving area.
      </p>
    ),
  },
  {
    color: "bg-indigo-500",
    ring: true,
    text: (
      <p className="text-slate-200 leading-relaxed font-medium">
        I saw our warehouse colleague attach a {" "}
        <strong className="text-indigo-300">label</strong> on {" "}
        <strong className="text-indigo-300">delivery note</strong>.
      </p>
    ),
  },
  {
    color: "bg-emerald-400",
    ring: false,
    text: (
      <p className="text-emerald-300 text-lg font-medium">
        This was a goldmine. 🏆
      </p>
    ),
  },
];

/* ---------- Pipeline Steps ---------- */
const pipeline = [
  {
    emoji: "🏷️",
    title: "AI reads the label",
    desc: "Extract the PO number from the clearly positioned label in the upper-left corner.",
  },
  {
    emoji: "🗄️",
    title: "SAP BTP queries SAP R3",
    desc: "Use the PO number to retrieve the exact list of material numbers from SAP tables.",
  },
  {
    emoji: "🧠",
    title: "AI use Material Number List as context",
    desc: "With the material number list as context, AI only needs to match each one to its CAS ID.",
  },
];

/* ---------- Main Section ---------- */
export default function WarehouseSection() {
  return (
    <Section id="warehouse" dark className="bg-gradient-to-b from-slate-900 to-indigo-950">
      <SectionLabel number="03" emoji="🏭" text="The Discovery" dark />

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3 text-balance">
          Answer in the Warehouse Floor
        </h2>
        <p className="text-lg text-indigo-300/60 max-w-2xl mb-14">
          
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: narrative timeline */}
        <div className="relative pl-8 border-l-2 border-indigo-800 space-y-8">
          {narrative.map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="relative">
                <div
                  className={`absolute -left-[25px] w-3.5 h-3.5 rounded-full ${item.color} border-4 border-slate-900 ${
                    item.ring ? "ring-4 ring-indigo-500/30" : ""
                  }`}
                />
                {item.text}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: delivery note with label */}
        <div className="flex justify-center pt-4">
          <DeliveryNoteWithLabel />
        </div>
      </div>

      {/* Why it's perfect */}
      <div className="grid sm:grid-cols-3 gap-4 mt-16">
        {[
          {
            emoji: "📍",
            title: "Fixed Position",
            desc: "Always in the upper-left corner — easy for AI to locate",
          },
          {
            emoji: "1️⃣",
            title: "One-to-One Mapping",
            desc: "Each delivery note has exactly one PO number — no ambiguity",
          },
          {
            emoji: "🔗",
            title: "SAP Linkage",
            desc: "PO number → SAP query → exact material number list",
          },
        ].map((c, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="bg-white/[0.05] border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <span className="text-2xl">{c.emoji}</span>
              <h4 className="font-bold text-white mt-2 mb-1">{c.title}</h4>
              <p className="text-sm text-indigo-300/60">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* New Pipeline */}
      <div className="mt-16 max-w-2xl">
        <Reveal>
          <h3 className="text-xl font-bold text-white mb-8">
            The New Pipeline
          </h3>
        </Reveal>
        <div className="space-y-5">
          {pipeline.map((step, i) => (
            <Reveal key={i} delay={i * 0.12} direction="left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center text-xl">
                  {step.emoji}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-0.5">
                    Step {i + 1}
                  </div>
                  <h4 className="font-bold text-white">{step.title}</h4>
                  <p className="text-sm text-indigo-300/50 mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Result banner */}
      <Reveal className="mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-8 text-center">
          <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-4">
            Result
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-black text-white">90%</div>
              <div className="text-[11px] text-indigo-200/70">
                PO Number Reading
              </div>
            </div>
            <span className="text-xl text-indigo-300">×</span>
            <div className="text-center">
              <div className="text-3xl font-black text-white">95%</div>
              <div className="text-[11px] text-indigo-200/70">
                CAS ID Matching
              </div>
            </div>
            <span className="text-xl text-indigo-300">=</span>
            <div className="text-center bg-white/15 rounded-xl px-6 py-3">
              <div className="text-4xl font-black text-white">85%</div>
              <div className="text-[11px] text-indigo-200/70">
                Overall Accuracy
              </div>
            </div>
          </div>
          <p className="text-indigo-200/50 mt-4 text-sm">
            Up from 60% — significant, but not enough for production use.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}