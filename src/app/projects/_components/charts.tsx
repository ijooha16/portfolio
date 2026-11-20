"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, MotionConfig, useInView } from "framer-motion";
import { ChartType, ColumnBarType, CompareRowType, RingType } from "@/data/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

const decimalsOf = (n: number) => {
  const s = String(n);
  return s.includes(".") ? s.split(".")[1].length : 0;
};
const fmt = (n: number, d: number) =>
  n.toLocaleString("ko-KR", { minimumFractionDigits: d, maximumFractionDigits: d });

const CountUp = ({
  to,
  decimals,
  start,
  delay = 0,
}: {
  to: number;
  decimals: number;

  start?: boolean;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const selfInView = useInView(ref, { once: true, margin: "-40px" });
  const go = start ?? selfInView;
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!go) return;
    const controls = animate(0, to, {
      duration: 1.1,
      delay,
      ease: EASE,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [go, to, delay]);

  return <span ref={ref}>{fmt(go ? val : 0, decimals)}</span>;
};

const changeLabel = (row: CompareRowType) => {
  const { before, after } = row;
  if (before === 0) return null;
  if (after > before) {
    const x = after / before;
    return x >= 2 ? `${fmt(x, x >= 10 ? 0 : 1)}배` : `${Math.round((x - 1) * 100)}% 증가`;
  }
  return `${Math.round(((before - after) / before) * 100)}% 감소`;
};

const Bar = ({
  pct,
  strong,
  delay,
}: {
  pct: number;
  strong: boolean;
  delay: number;
}) => (
  <div className="h-2.5 flex-1 rounded-full bg-[#eef0f4] overflow-hidden">
    <motion.div
      className={`h-full rounded-full ${strong ? "bg-brand" : "bg-caption"}`}
      initial={{ width: 0 }}
      whileInView={{ width: `${pct === 0 ? 1.5 : pct}%` }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  </div>
);

const CompareChart = ({ rows }: { rows: CompareRowType[] }) => (
  <div className="flex flex-col gap-5">
    {rows.map((row, i) => {
      const max = Math.max(row.before, row.after) || 1;
      const change = changeLabel(row);
      return (
        <div key={row.label} className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm font-semibold text-ink break-keep">
              {row.label}
            </span>
            {change && (
              <span className="shrink-0 text-xs font-bold text-brand-deep bg-brand-pale rounded-md px-2 py-0.5">
                {change}
              </span>
            )}
          </div>
          {[
            { k: "개선 전", v: row.before, text: row.beforeText, strong: false },
            { k: "개선 후", v: row.after, text: row.afterText, strong: true },
          ].map((b, j) => (
            <div key={b.k} className="flex items-center gap-3">
              <span
                className={`w-12 shrink-0 text-xs ${
                  b.strong ? "text-ink font-semibold" : "text-mute"
                }`}
              >
                {b.k}
              </span>
              <Bar pct={(b.v / max) * 100} strong={b.strong} delay={i * 0.15 + j * 0.12} />
              <span
                className={`w-20 shrink-0 text-right text-sm tabular-nums ${
                  b.strong ? "font-bold text-brand-deep" : "text-mute"
                }`}
              >
                {b.text ?? (
                  <>
                    <CountUp to={b.v} decimals={decimalsOf(b.v)} />
                    {row.unit}
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

const Ring = ({ ring, delay }: { ring: RingType; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const R = 42;
  const C = 2 * Math.PI * R;
  const ratio = ring.total ? ring.value / ring.total : 0;
  const pct = Math.round(ratio * 100);
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#eef0f4" strokeWidth="9" />
          <motion.circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            className="stroke-brand"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            animate={{ strokeDashoffset: inView ? C * (1 - ratio) : C }}
            transition={{ duration: 1.1, delay, ease: EASE }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-brand-deep tabular-nums">
          <CountUp to={pct} decimals={0} start={inView} delay={delay} />%
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-ink break-keep">{ring.label}</span>
        <span className="text-xs text-mute break-keep">
          {ring.value.toLocaleString("ko-KR")} / {ring.total.toLocaleString("ko-KR")}
          {ring.caption ? ` · ${ring.caption}` : ""}
        </span>
      </div>
    </div>
  );
};

const RingChart = ({ rings }: { rings: RingType[] }) => (
  <div
    className={`grid gap-6 ${
      rings.length >= 3 ? "grid-cols-1 sm:grid-cols-3" : rings.length === 2 ? "grid-cols-2" : "grid-cols-1"
    }`}
  >
    {rings.map((r, i) => (
      <Ring key={r.label} ring={r} delay={i * 0.15} />
    ))}
  </div>
);

const Column = ({
  pct,
  strong,
  delay,
  start,
  value,
  text,
  unit,
  narrow = false,
}: {
  pct: number;
  strong: boolean;
  delay: number;
  start: boolean;
  value: number;
  text?: string;
  unit: string;
  narrow?: boolean;
}) => (
  <div className="flex flex-col items-center justify-end h-full gap-1.5 min-w-0">
    <span
      className={`text-xs sm:text-sm tabular-nums whitespace-nowrap ${
        strong ? "font-bold text-brand-deep" : "text-mute"
      }`}
    >
      {text ?? (
        <>
          <CountUp to={value} decimals={decimalsOf(value)} start={start} delay={delay} />
          {unit}
        </>
      )}
    </span>
    <motion.div
      className={`${narrow ? "w-7 sm:w-9" : "w-10 sm:w-14"} rounded-t-lg ${
        strong ? "bg-brand" : "bg-caption"
      }`}
      initial={{ height: 0 }}
      animate={{ height: start ? `${Math.max(pct, 1.5) * 0.78}%` : 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  </div>
);

const ColumnChart = ({ bars, unit }: { bars: ColumnBarType[]; unit: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const max = Math.max(...bars.map((b) => b.value)) || 1;
  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-end justify-around gap-3 h-52 border-b border-[#dcdfe5]">
        {bars.map((b, i) => (
          <Column
            key={b.label}
            pct={(b.value / max) * 100}
            strong={!!b.strong}
            delay={i * 0.15}
            start={inView}
            value={b.value}
            text={b.text}
            unit={unit}
          />
        ))}
      </div>
      <div className="flex justify-around gap-3 pt-2">
        {bars.map((b) => (
          <span
            key={b.label}
            className={`flex-1 text-center text-xs break-keep ${
              b.strong ? "font-semibold text-ink" : "text-mute"
            }`}
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const CompareColumnChart = ({ rows }: { rows: CompareRowType[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const sameUnit = rows.every((r) => r.unit === rows[0].unit);
  const sharedMax = Math.max(...rows.flatMap((r) => [r.before, r.after])) || 1;
  const maxOf = (r: CompareRowType) =>
    sameUnit ? sharedMax : Math.max(r.before, r.after) || 1;
  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex items-end justify-around gap-6 h-52 border-b border-[#dcdfe5]">
        {rows.map((r, i) => (
          <div key={r.label} className="flex items-end gap-2 h-full">
            <Column
              pct={(r.before / maxOf(r)) * 100}
              strong={false}
              delay={i * 0.2}
              start={inView}
              value={r.before}
              text={r.beforeText}
              unit={r.unit}
              narrow
            />
            <Column
              pct={(r.after / maxOf(r)) * 100}
              strong
              delay={i * 0.2 + 0.12}
              start={inView}
              value={r.after}
              text={r.afterText}
              unit={r.unit}
              narrow
            />
          </div>
        ))}
      </div>
      <div className="flex justify-around gap-6">
        {rows.map((r) => {
          const change = changeLabel(r);
          return (
            <div key={r.label} className="flex flex-col items-center gap-1 flex-1 text-center">
              <span className="text-xs font-semibold text-ink break-keep">{r.label}</span>
              {change && (
                <span className="text-xs font-bold text-brand-deep bg-brand-pale rounded-md px-2 py-0.5">
                  {change}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-mute">
        {!sameUnit && <span>단위가 달라 항목마다 따로 비교</span>}
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-caption" /> 개선 전
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand" /> 개선 후
        </span>
      </div>
    </div>
  );
};

export const Chart = ({ chart }: { chart: ChartType }) => (
  <MotionConfig reducedMotion="user">
    {chart.kind === "compare" && <CompareChart rows={chart.rows} />}
    {chart.kind === "compareColumns" && <CompareColumnChart rows={chart.rows} />}
    {chart.kind === "columns" && <ColumnChart bars={chart.bars} unit={chart.unit} />}
    {chart.kind === "ring" && <RingChart rings={chart.rings} />}
  </MotionConfig>
);
