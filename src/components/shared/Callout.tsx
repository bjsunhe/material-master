import type { ReactNode } from "react";

interface Props {
  type: "insight" | "result" | "warning" | "quote";
  children: ReactNode;
  className?: string;
}

const styles = {
  insight: { bg: "bg-indigo-50", border: "border-indigo-200", icon: "💡", text: "text-indigo-800" },
  result: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "✅", text: "text-emerald-800" },
  warning: { bg: "bg-red-50", border: "border-red-200", icon: "⚠️", text: "text-red-800" },
  quote: { bg: "bg-slate-50", border: "border-slate-200", icon: "💬", text: "text-slate-700" },
};

export default function Callout({ type, children, className = "" }: Props) {
  const s = styles[type];
  return (
    <div className={`${s.bg} border-2 ${s.border} rounded-2xl p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
        <div className={`${s.text} leading-relaxed`}>{children}</div>
      </div>
    </div>
  );
}