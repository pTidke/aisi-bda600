"use client";

import React from "react";
import { Column } from "@ant-design/plots";

const STANCE_COLORS: Record<string, string> = {
  Enabling: "#4CD964",
  Restrictive: "#ED7D7D",
  Balanced: "#F5A623",
  Neutral: "#94A3B8",
};

const STANCE_ORDER = ["Enabling", "Balanced", "Neutral", "Restrictive"];

const rawData = [
  { year: "2019", stance: "Enabling", count: 5 },
  { year: "2019", stance: "Restrictive", count: 5 },
  { year: "2019", stance: "Balanced", count: 1 },
  { year: "2019", stance: "Neutral", count: 2 },
  { year: "2020", stance: "Enabling", count: 7 },
  { year: "2020", stance: "Restrictive", count: 3 },
  { year: "2020", stance: "Balanced", count: 1 },
  { year: "2020", stance: "Neutral", count: 3 },
  { year: "2021", stance: "Enabling", count: 20 },
  { year: "2021", stance: "Restrictive", count: 10 },
  { year: "2021", stance: "Balanced", count: 8 },
  { year: "2021", stance: "Neutral", count: 17 },
  { year: "2022", stance: "Enabling", count: 35 },
  { year: "2022", stance: "Restrictive", count: 11 },
  { year: "2022", stance: "Balanced", count: 5 },
  { year: "2022", stance: "Neutral", count: 12 },
  { year: "2023", stance: "Enabling", count: 19 },
  { year: "2023", stance: "Restrictive", count: 21 },
  { year: "2023", stance: "Balanced", count: 12 },
  { year: "2023", stance: "Neutral", count: 18 },
  { year: "2024", stance: "Enabling", count: 38 },
  { year: "2024", stance: "Restrictive", count: 65 },
  { year: "2024", stance: "Balanced", count: 15 },
  { year: "2024", stance: "Neutral", count: 27 },
  { year: "2025", stance: "Enabling", count: 13 },
  { year: "2025", stance: "Restrictive", count: 6 },
  { year: "2025", stance: "Balanced", count: 5 },
  { year: "2025", stance: "Neutral", count: 1 },
];

// Sort by stance order for correct stacking
const sortedData = [...rawData].sort((a, b) => {
  if (a.year !== b.year) return a.year.localeCompare(b.year);
  return STANCE_ORDER.indexOf(a.stance) - STANCE_ORDER.indexOf(b.stance);
});

const PolicyStanceTimeline = () => {
  const config = {
    data: sortedData,
    xField: "year",
    yField: "count",
    colorField: "stance",
    stack: true,
    style: {
      fill: (d: any) => {
        const stance = d?.data?.stance || d?.stance || "";
        return STANCE_COLORS[stance] || "#CBD5E1";
      },
      fillOpacity: 0.9,
      //   radiusTopLeft: 3,
      //   radiusTopRight: 3,
      stroke: "#fff",
      lineWidth: 0.5,
    },
    scale: {
      color: {
        domain: STANCE_ORDER,
        range: STANCE_ORDER.map((s) => STANCE_COLORS[s]),
      },
    },
    axis: {
      x: {
        title: null,
        labelFontSize: 13,
        labelFontWeight: 600,
        labelFill: "#333",
      },
      y: {
        title: "Number of Enacted Policies",
        titleFontSize: 12,
        titleFill: "#64748B",
        labelFill: "#94A3B8",
        labelFontSize: 11,
        grid: true,
        gridLineWidth: 1,
        gridStroke: "#F1F5F9",
        gridLineDash: [4, 4],
      },
    },
    tooltip: {
      title: (d: any) => `${d?.year || ""}`,
      items: [
        {
          field: "count",
          name: (d: any) => d?.stance || "",
          valueFormatter: (v: any) => `${Number(v)} policies`,
        },
      ],
    },
    legend: {
      color: {
        position: "top" as const,
      },
    },
    interaction: {
      elementHighlight: true,
    },
    animation: {
      appear: {
        animation: "grow-in-y",
        duration: 1200,
        easing: "ease-out",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 550 }}>
      <Column {...config} />
    </div>
  );
};

export default PolicyStanceTimeline;
