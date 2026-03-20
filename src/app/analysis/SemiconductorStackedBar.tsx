"use client";

import { useEffect, useRef } from "react";

const FONT = "'Josefin Sans', sans-serif";

const COLOR_MAP: Record<string, string> = {
  "Design Resource": "#5cb85c",
  "Material Resource": "#f0a832",
  Process: "#e8756a",
  "Tool Resource": "#5b9bd5",
};

const TYPE_KEYS = Object.keys(COLOR_MAP) as Array<keyof typeof COLOR_MAP>;

type RawRow = { country: string } & Record<string, number | string>;

const raw: RawRow[] = [
  {
    country: "United States",
    "Design Resource": 109.817,
    "Material Resource": 3.628,
    Process: 373.165,
    "Tool Resource": 129.593,
  },
  {
    country: "Japan",
    "Design Resource": 43.052,
    "Material Resource": 8.224,
    Process: 22.964,
    "Tool Resource": 70.377,
  },
  {
    country: "South Korea",
    "Design Resource": 85.428,
    "Material Resource": 1.09,
    Process: 17.223,
    "Tool Resource": 7.166,
  },
  {
    country: "Europe",
    "Design Resource": 32.079,
    "Material Resource": 0,
    Process: 51.669,
    "Tool Resource": 0,
  },
  {
    country: "Taiwan",
    "Design Resource": 14.627,
    "Material Resource": 2.063,
    Process: 63.151,
    "Tool Resource": 0.549,
  },
  {
    country: "China",
    "Design Resource": 20.877,
    "Material Resource": 0.514,
    Process: 28.705,
    "Tool Resource": 15.635,
  },
  {
    country: "Netherlands",
    "Design Resource": 0,
    "Material Resource": 0,
    Process: 0,
    "Tool Resource": 54.189,
  },
  {
    country: "Germany",
    "Design Resource": 0,
    "Material Resource": 1.526,
    Process: 0,
    "Tool Resource": 1.861,
  },
  {
    country: "Singapore",
    "Design Resource": 0,
    "Material Resource": 0,
    Process: 0,
    "Tool Resource": 3.158,
  },
  {
    country: "United Kingdom",
    "Design Resource": 0,
    "Material Resource": 1.677,
    Process: 0,
    "Tool Resource": 0.225,
  },
  // {
  //   country: "Israel",
  //   "Design Resource": 0,
  //   "Material Resource": 0,
  //   Process: 0,
  //   "Tool Resource": 1.779,
  // },
  // {
  //   country: "Austria",
  //   "Design Resource": 0,
  //   "Material Resource": 0,
  //   Process: 0,
  //   "Tool Resource": 1.527,
  // },
  // { country: "Switzerland",   "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.268 },
  // { country: "Italy",         "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.169 },
  // { country: "Sweden",        "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.164 },
  // { country: "Hungary",       "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.131 },
  // { country: "France",        "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.067 },
  // { country: "Malaysia",      "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.063 },
  // { country: "Belarus",       "Design Resource": 0,       "Material Resource": 0,      "Process": 0,       "Tool Resource": 0.032 },
];

// Sort by total descending, then flatten to long format
const data = [...raw]
  .sort((a, b) => {
    const sumA = TYPE_KEYS.reduce((s, k) => s + Number(a[k]), 0);
    const sumB = TYPE_KEYS.reduce((s, k) => s + Number(b[k]), 0);
    return sumB - sumA;
  })
  .flatMap((row) =>
    TYPE_KEYS.map((type) => ({
      country: row.country,
      type,
      value: Number(row[type]),
    })),
  );

export default function SemiconductorStackedBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let chart: InstanceType<typeof import("@antv/g2").Chart> | null = null;

    import("@antv/g2").then(({ Chart }) => {
      if (!containerRef.current) return;

      chart = new Chart({
        container: containerRef.current,
        autoFit: true,
        height: 500,
      });

      chart.options({
        type: "view",
        data,
        children: [
          {
            type: "interval",
            encode: {
              x: "country",
              y: "value",
              color: (d: { type: string }) => d.type,
            },
            transform: [{ type: "stackY" }],
            scale: {
              color: {
                type: "ordinal",
                domain: TYPE_KEYS,
                range: TYPE_KEYS.map((k) => COLOR_MAP[k]),
              },
            },
            style: {
              fill: (d: { type: string }) => COLOR_MAP[d.type] ?? "#ccc",
            },
            axis: {
              x: {
                title: false,
                labelAutoRotate: true,
                labelAutoHide: false,
                labelFontFamily: FONT,
                labelFontSize: 11,
              },
              y: {
                title: "Market Size ($B)",
                titleFontFamily: FONT,
                labelFormatter: (v: number) => `$${v.toFixed(0)}B`,
                labelFontFamily: FONT,
              },
            },
            legend: true,
            // shared: true collects all datums at the same x (country) and
            // renders one tooltip row per datum — one per resource type
            interaction: {
              tooltip: { shared: true },
            },
            tooltip: {
              title: (d: { country: string }) => d.country,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              items: [
                (d: any) => ({
                  name: d.type,
                  value: `$${Number(d.value).toFixed(2)}B`,
                  color: COLOR_MAP[d.type],
                }),
              ],
            },
          },
        ],
      });

      chart.render();
    });

    return () => {
      chart?.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
}
