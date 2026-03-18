import { motion } from "framer-motion";
import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";
import { TAKEAWAYS } from "../../data/constants";

export default function TakeawaysSection() {
  return (
    <>
      {/* Takeaway cards */}
      <Section id="takeaways" className="bg-slate-50">
        <SectionLabel number="07" emoji="🎓" text="Lessons Learned" />

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-balance">
            What I Learned
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mb-12">
            The most important lessons aren't about prompt engineering or model
            selection.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TAKEAWAYS.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h4 className="font-bold text-slate-900 mt-3 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 mb-4 flex-1">
                  {item.description}
                </p>
                <p className="text-sm text-indigo-600 font-medium italic leading-snug">
                  "{item.highlight}"
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing quote */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-5xl mb-6 block">💡</span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-8 italic text-indigo-100 text-balance">
              "The best AI solutions aren't built at a desk. They're built at
              the intersection of technology and the real world."
            </blockquote>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8 rounded-full" />
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm border border-white/10">
                <span className="text-red-400 font-bold">60%</span>
                <span className="text-indigo-400">→</span>
                <span className="text-emerald-400 font-black text-xl">95%</span>
              </div>
            </div>
            <p className="text-indigo-300/40 text-sm mt-6">
              Through observation, collaboration, and systematic
              problem-solving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-center">
        <p className="text-slate-500 text-sm">
          AI Agent for SAP Logistics Document Automation — A Case Study
        </p>
        <p className="text-slate-600 text-xs mt-1">
          Built with curiosity, warehouse visits, and a lot of label printer
          configuration 🏷️
        </p>
      </footer>
    </>
  );
}