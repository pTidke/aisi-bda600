"use client";

import React, { useEffect, useState } from "react";
// import { Mix } from "@ant-design/charts"; 

const FONT = "'Josefin Sans', sans-serif";

const DATA = [
  { tech: "Computer Vision", value: 27304.0, color: "#4888B4" },
  { tech: "Control", value: 11662.0, color: "#4888B4" },
  { tech: "Analytics And Algorithms", value: 10733.0, color: "#4888B4" },
  { tech: "Measuring And Testing", value: 9317.0, color: "#4888B4" },
  { tech: "Planning And Scheduling", value: 8111.0, color: "#4888B4" },
  { tech: "Knowledge Representation", value: 7688.0, color: "#4888B4" },
  { tech: "Speech Processing", value: 7573.0, color: "#4888B4" },
  { tech: "Language Processing", value: 1387.0, color: "#4888B4" },
  { tech: "Distributed Ai", value: 370.0, color: "#4888B4" },
  { tech: "Robotics", value: 59.0, color: "#4888B4" },
].sort((a, b) => a.value - b.value); // Robotics bottom, CV top

export default function AiTechPatentsBubble() {
  const [Mix, setMix] = useState<any>(null);

  useEffect(() => {
    import("@ant-design/charts").then((mod) => {
      setMix(() => mod.Mix);
    });
  }, []);

  if (!Mix) return <div style={{ height: 500 }} />;

  const config = {
    data: DATA,
    autoFit: true,
    height: 600,
    coordinate: { transform: [{ type: "transpose" }] },
    children: [
      {
        type: "interval",
        encode: {
          x: "tech",
          y: "value",
        },
        scale: {
          y: { range: [0, 1] },
        },
        style: {
          fill: "#98D1EC",
          maxWidth: 8, // Thinner bars
          radius: 4,
        },
      },
      {
        type: "point",
        encode: {
          x: "tech",
          y: "value",
        },
        style: {
          fill: "#4888B4",
          size: 10, // Larger bubbles relative to bars
          lineWidth: 0,
        },
        label: {
          text: (d: any) => d.value.toLocaleString(),
          position: "right",
          dx: 12,
          fontFamily: FONT,
          fontSize: 12,
          fill: "#1E293B",
          fontWeight: 500,
        },
      },
    ],
    axis: {
      x: {
        title: null,
        labelFontFamily: FONT,
        labelFontSize: 13,
        labelFill: "#64748B",
        line: null,
        tick: null,
      },
      y: {
        grid: null,
        line: null,
        tick: null,
        label: null,
      },
    },
    tooltip: false as const, // Match the static look of the image unless needed
    animation: {
      appear: {
        animation: "path-in",
        duration: 2000,
      },
    },
  };

  return (
    <div style={{ padding: "10px 0" }}>
      <h3
        style={{
          fontFamily: FONT,
          fontSize: "20px",
          color: "#F87171",
          fontWeight: 700,
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        Most Common AI Technologies in Patents
      </h3>
      <div style={{ height: 500 }}>
        <Mix {...config} />
      </div>
    </div>
  );
}
