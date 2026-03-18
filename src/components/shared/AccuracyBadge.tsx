import { STAGES } from "../../data/constants";

interface Props {
  value: number;
  stage: number;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-sm px-2.5 py-0.5 rounded-lg",
  md: "text-xl px-4 py-1.5 rounded-xl",
  lg: "text-3xl px-5 py-2 rounded-xl",
};

export default function AccuracyBadge({ value, stage, size = "md" }: Props) {
  const s = STAGES[stage];
  return (
    <span
      className={`inline-flex items-center font-black ${sizeMap[size]}`}
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {value}%
    </span>
  );
}