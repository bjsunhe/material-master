import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  fullHeight?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  dark = false,
  fullHeight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative px-6 md:px-8 overflow-hidden
        ${fullHeight ? "min-h-screen flex flex-col justify-center" : "py-24 md:py-32"}
        ${dark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}
        ${className}
      `}
    >
      <div className="relative max-w-5xl mx-auto w-full">{children}</div>
    </section>
  );
}