export const SECTIONS = [
  { id: "hero", label: "Start" },
  { id: "challenge", label: "60%" },
  { id: "hypothesis", label: "Idea" },
  { id: "warehouse", label: "Discovery" },
  { id: "zero-vs-o", label: "Detail" },
  { id: "validation", label: "Validate" },
  { id: "journey", label: "Journey" },
  { id: "takeaways", label: "Lessons" },
] as const;

export const STAGES = [
  {
    stage: 0,
    accuracy: 60,
    step1: null,
    step2: null,
    title: "Naive Approach",
    subtitle: "Feed PDF directly to AI",
    insight:
      "Too much ambiguity — the AI hallucinated, confusing order numbers with material numbers.",
    color: "#ef4444",
    bg: "#fef2f2",
  },
  {
    stage: 1,
    accuracy: 85,
    step1: 90,
    step2: 95,
    title: "Barcode + SAP Context",
    subtitle: "Warehouse discovery → PO number → material list",
    insight:
      "Discovered barcode labels in warehouse. PO number → SAP query → material list as AI context.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    stage: 2,
    accuracy: 94,
    step1: 99,
    step2: 95,
    title: "Font Optimization",
    subtitle: "Larger, bolder label printing",
    insight:
      'Fixed the "0" vs "O" confusion by asking warehouse to print labels in larger, bold font.',
    color: "#6366f1",
    bg: "#eef2ff",
  },
  {
    stage: 3,
    accuracy: 95,
    step1: 100,
    step2: 95,
    title: "SAP Validation Loop",
    subtitle: "System-level error catching",
    insight:
      "Used SAP as a validation layer. Invalid PO numbers caught and routed to human review.",
    color: "#10b981",
    bg: "#ecfdf5",
  },
] as const;

export const TAKEAWAYS = [
  {
    emoji: "🏭",
    title: "Go to the Gemba",
    description:
      "The breakthrough came from walking into the warehouse and observing real processes — not from tuning hyperparameters.",
    highlight:
      "The best AI solutions are built at the intersection of technology and the real world.",
  },
  {
    emoji: "🧩",
    title: "Context > Capability",
    description:
      "Giving the AI better context was far more effective than trying to make the AI smarter at extraction.",
    highlight: "Don't ask AI to do more — give it more to work with.",
  },
  {
    emoji: "🔄",
    title: "Systems as Validators",
    description:
      "SAP wasn't just a data source — it became a validation layer that caught errors before they entered the system.",
    highlight: "Existing systems can verify AI output, not just feed it.",
  },
  {
    emoji: "🔍",
    title: "Analyze Failures Specifically",
    description:
      'The "0/O" confusion was only discovered by carefully examining individual failure cases.',
    highlight: "Aggregate accuracy hides specific, fixable problems.",
  },
  {
    emoji: "🤝",
    title: "Cross-functional Collaboration",
    description:
      "The solution required talking to warehouse operators, label printer admins, and SAP administrators.",
    highlight: "AI projects are people projects.",
  },
  {
    emoji: "⛓️",
    title: "Chain of Accuracy",
    description:
      "Overall accuracy is the product of each step. Improving any single step lifts the entire system.",
    highlight: "Think in pipelines, optimize each link.",
  },
] as const;