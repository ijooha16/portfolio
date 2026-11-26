import type { ReactNode } from "react";
import { Info } from "lucide-react";

const palette = {
  purple: "border-stroke bg-brand-pale text-brand-deep",
  teal: "border-accent-stroke bg-accent-pale text-accent-deep",
};

export default function Notice({
  tone = "purple",
  children,
}: {
  tone?: keyof typeof palette;
  children: ReactNode;
}) {
  return (
    <div className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm leading-6 break-keep ${palette[tone]}`}>
      <Info size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}
