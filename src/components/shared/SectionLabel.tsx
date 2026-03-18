import Reveal from "./Reveal";

interface Props {
  number: string;
  emoji: string;
  text: string;
  dark?: boolean;
}

export default function SectionLabel({ number, emoji, text, dark = false }: Props) {
  return (
    <Reveal className="flex items-center gap-3 mb-4">
      <span
        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
          dark
            ? "bg-white/10 text-indigo-300 border border-white/10"
            : "bg-indigo-100 text-indigo-600"
        }`}
      >
        {number}
      </span>
      <span className="text-2xl">{emoji}</span>
      <span
        className={`text-xs font-bold uppercase tracking-widest ${
          dark ? "text-indigo-300/80" : "text-indigo-500"
        }`}
      >
        {text}
      </span>
    </Reveal>
  );
}