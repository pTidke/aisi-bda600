"use client";

import React, { useEffect, useState } from "react";

import { FONT } from "./constants";

const DATA = {
  name: "root",
  children: [
    { tech: "Computer Vision", value: 27304.0, color: "#FE3E54" },
    { tech: "Control", value: 11662.0, color: "#FF8C00" },
    { tech: "Analytics And Algorithms", value: 10733.0, color: "#1E88E5" },
    { tech: "Measuring And Testing", value: 9317.0, color: "#26C6DA" },
    { tech: "Planning And Scheduling", value: 8111.0, color: "#F06292" },
    { tech: "Knowledge Representation", value: 7688.0, color: "#FFB300" },
    { tech: "Speech Processing", value: 7573.0, color: "#43A047" },
    { tech: "Language Processing", value: 1387.0, color: "#5E35B1" },
    { tech: "Distributed Ai", value: 370.0, color: "#039BE5" },
    { tech: "Robotics", value: 59.0, color: "#D81B60" },
  ],
};

const COLORS = [
  "#FE3E54",
  "#FF8C00",
  "#1E88E5",
  "#26C6DA",
  "#F06292",
  "#FFB300",
  "#43A047",
  "#5E35B1",
  "#039BE5",
  "#D81B60",
];

export default function AiTechPatentsPackedBubble() {
  const [CirclePacking, setCirclePacking] = useState<any>(null);

  useEffect(() => {
    import("@ant-design/charts").then((mod) => {
      setCirclePacking(() => mod.CirclePacking);
    });
  }, []);

  if (!CirclePacking) return <div style={{ height: 600 }} />;

  const config = {
    data: DATA,
    autoFit: true,
    padding: 0,
    valueField: "value",
    // In G2 v5 hierarchical charts, the original data is in d.data
    colorField: (d: any) => d.data?.color || "transparent",
    scale: {
      color: {
        type: "identity",
      },
    },
    label: {
      text: (d: any) => {
        const tech = d.data?.tech;
        const val = d.data?.value || d.value;
        if (tech && val > 1500) {
          return `${tech}\n${val.toLocaleString()}`;
        }
        return "";
      },
      position: "inside",
      fill: "#000",
      fontSize: 12,
      fontWeight: 600,
      fontFamily: FONT,
      textAlign: "center",
      textBaseline: "middle",
    },
    style: {
      stroke: (d: any) => (d.data?.tech ? "#fff" : "transparent"),
      lineWidth: 1,
      fillOpacity: 0.9,
    },
    legend: false as const,
    tooltip: {
      title: (d: any) => d.data?.tech || "AI Patents",
      items: [
        (d: any) => {
          const tech = d.data?.tech;
          const val = d.data?.value || d.value;
          if (!tech) return null;
          return {
            name: "Patents",
            value: val.toLocaleString(),
          };
        },
      ],
    },
  };

  return (
    <div style={{ width: "100%", height: 600 }}>
      {/* @ts-ignore */}
      <CirclePacking {...config} />
    </div>
  );
}
