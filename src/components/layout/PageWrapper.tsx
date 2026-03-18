import type { ReactNode } from "react";
import { ScrollProvider } from "../../context/ScrollContext";
import TopProgressBar from "./TopProgressBar";
import FloatingNav from "./FloatingNav";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <ScrollProvider>
      <div className="min-h-screen bg-white text-slate-900 antialiased">
        <TopProgressBar />
        <FloatingNav />
        {children}
      </div>
    </ScrollProvider>
  );
}