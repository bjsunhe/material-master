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
        <Reveal delay={0.1}>
          <div className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-indigo-100 text-lg leading-relaxed">
              If I could tell the AI <em>in advance</em> which material numbers
              exist on this delivery note, it wouldn't have to{" "}
              <strong className="text-white">discover</strong> them from
              scratch. Its only job would be to{" "}
              <strong className="text-white">match</strong> each known material
              number to its corresponding CAS ID.
            </p>
            <p className="text-indigo-200/70 mt-4 text-lg">
              That's a <em>much</em> easier task.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-2xl p-8 text-center">
            <p className="text-2xl mb-3">🤔</p>
            <p className="text-xl font-bold text-white">
              But where would I get the material number list?
            </p>
            <p className="text-indigo-300/60 text-sm mt-2">
              The answer wasn't in the code. It was in the warehouse.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}