import Section from "../layout/Section";
import SectionLabel from "../shared/SectionLabel";
import Reveal from "../shared/Reveal";

export default function HypothesisSection() {
  return (
    <Section id="hypothesis" dark>
      <SectionLabel number="02" emoji="💡" text="The Hypothesis" dark />

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-balance">
          What if the problem isn't the AI — it's the lack of context?
        </h2>
      </Reveal>

      <div className="max-w-3xl mt-10 space-y-8">
        <Reveal delay={0.2}>
          <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-2xl p-8 text-center">
            <p className="text-2xl mb-3">🤔</p>
            <p className="text-xl font-bold text-white">
             {" "}
              <span className="text-indigo-300 underline underline-offset-4 decoration-indigo-400/50 decoration-2">
                Material Number List
              </span> -{">"} AI
               
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}