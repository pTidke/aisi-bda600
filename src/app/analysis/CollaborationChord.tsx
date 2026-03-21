"use client";

import React, { useEffect, useRef } from "react";
import { G2 } from "@ant-design/plots";
import { COUNTRY_COLORS } from "./constants";

// COUNTRY_COLORS is now imported from constants.ts

const RAW_LINKS = [
  { a: "China", b: "United States", value: 162646 },
  { a: "China", b: "United Kingdom", value: 62602 },
  { a: "Australia", b: "China", value: 47414 },
  { a: "China", b: "Singapore", value: 39882 },
  { a: "United Kingdom", b: "United States", value: 39604 },
  { a: "Germany", b: "United States", value: 39302 },
  { a: "Canada", b: "United States", value: 37032 },
  { a: "Canada", b: "China", value: 31328 },
  { a: "India", b: "United States", value: 29808 },
  { a: "China", b: "Japan", value: 25864 },
  { a: "Germany", b: "United Kingdom", value: 23502 },
  { a: "Australia", b: "United States", value: 21634 },
  { a: "France", b: "United States", value: 21356 },
  { a: "Italy", b: "United States", value: 19002 },
  { a: "Japan", b: "United States", value: 18321 },
  { a: "China", b: "Germany", value: 16724 },
  { a: "Italy", b: "United Kingdom", value: 15898 },
  { a: "Switzerland", b: "United States", value: 14948 },
  { a: "Singapore", b: "United States", value: 14532 },
  { a: "France", b: "United Kingdom", value: 13902 },
  { a: "Germany", b: "Switzerland", value: 13578 },
  { a: "Germany", b: "Netherlands", value: 12864 },
  { a: "France", b: "Germany", value: 12734 },
  { a: "Germany", b: "Italy", value: 12726 },
  { a: "Netherlands", b: "United States", value: 12667 },
  { a: "France", b: "Italy", value: 11814 },
  { a: "China", b: "France", value: 11758 },
  { a: "Spain", b: "United States", value: 11377 },
  { a: "Australia", b: "United Kingdom", value: 11316 },
  { a: "Spain", b: "United Kingdom", value: 11294 },
  { a: "Netherlands", b: "United Kingdom", value: 10476 },
  { a: "Canada", b: "United Kingdom", value: 9810 },
  { a: "India", b: "Saudi Arabia", value: 9316 },
  { a: "Switzerland", b: "United Kingdom", value: 8696 },
  { a: "India", b: "United Kingdom", value: 8558 },
  { a: "Germany", b: "Spain", value: 8428 },
  { a: "Italy", b: "Spain", value: 8406 },
  { a: "France", b: "Spain", value: 7954 },
  { a: "China", b: "Italy", value: 7758 },
  { a: "China", b: "India", value: 7594 },
  { a: "Saudi Arabia", b: "United States", value: 7537 },
  { a: "Italy", b: "Switzerland", value: 7390 },
  { a: "China", b: "Netherlands", value: 6982 },
  { a: "Canada", b: "France", value: 6670 },
  { a: "Japan", b: "United Kingdom", value: 6660 },
  { a: "China", b: "Saudi Arabia", value: 6576 },
  { a: "Italy", b: "Netherlands", value: 6376 },
  { a: "Canada", b: "Germany", value: 6136 },
  { a: "France", b: "Switzerland", value: 5738 },
  { a: "China", b: "Switzerland", value: 5372 },
];

const chordData = RAW_LINKS.map((link) => ({
  source: link.a,
  target: link.b,
  value: link.value,
}));

const CollaborationChord = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chart = new (G2 as any).Chart({
      container: containerRef.current,
      autoFit: true,
      height: 750,
    });

    chartRef.current = chart;

    chart
      .chord()
      .data(chordData)
      .encode("source", "source")
      .encode("target", "target")
      .encode("value", "value")
      .scale("color", {
        domain: Object.keys(COUNTRY_COLORS),
        range: Object.values(COUNTRY_COLORS),
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .style(
        "nodeFill",
        (d: { id: string }) => COUNTRY_COLORS[d.id] || "#94A3B8",
      )
      .style("nodeStroke", "#fff")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .style(
        "edgeFill",
        (d: { source: string }) => COUNTRY_COLORS[d.source] || "#94A3B8",
      )
      .style("edgeFillOpacity", 0.2)
      .animate("enter", { type: "zoomIn", duration: 1000 })
      .label({
        text: "id",
        fontSize: 10,
        fill: "#333",
        position: "outside",
      })
      .tooltip({
        title: (d: { source: string; target: string }) =>
          `${d.source} ↔ ${d.target}`,
        items: [{ field: "value", name: "Co-authored Articles" }],
      });

    chart.render();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: 750, marginTop: "30px" }}
    />
  );
};

export default CollaborationChord;
