"use client";

import React from "react";
import { Area } from "@ant-design/plots";

/*
 *  Global Cross-Border AI Collaboration by Research Field (2015–2023)
 *  Stacked area showing growth across 8 fields
 *  Data: field_growth_data.json from crossborder_collab_master.csv
 *
 *  npm install @ant-design/plots
 */

const FIELD_COLORS: Record<string, string> = {
  "Artificial intelligence": "#5B9BD5",
  "Computer vision": "#7EC8C8",
  "Chip design and fabrication": "#ED7D7D",
  Cybersecurity: "#F5A623",
  Robotics: "#C4A484",
  "Natural language processing": "#9B59B6",
  "Large language models": "#4CD964",
  "AI safety": "#54A0FF",
};

const fieldData = [
  { year: "2015", field: "Artificial intelligence", value: 22277 },
  { year: "2015", field: "Chip design and fabrication", value: 6568 },
  { year: "2015", field: "Computer vision", value: 4623 },
  { year: "2015", field: "Cybersecurity", value: 2178 },
  { year: "2015", field: "Natural language processing", value: 1119 },
  { year: "2015", field: "Robotics", value: 2677 },
  { year: "2016", field: "AI safety", value: 30 },
  { year: "2016", field: "Artificial intelligence", value: 25984 },
  { year: "2016", field: "Chip design and fabrication", value: 7955 },
  { year: "2016", field: "Computer vision", value: 5781 },
  { year: "2016", field: "Cybersecurity", value: 2767 },
  { year: "2016", field: "Large language models", value: 29 },
  { year: "2016", field: "Natural language processing", value: 1624 },
  { year: "2016", field: "Robotics", value: 3057 },
  { year: "2017", field: "AI safety", value: 87 },
  { year: "2017", field: "Artificial intelligence", value: 29719 },
  { year: "2017", field: "Chip design and fabrication", value: 7967 },
  { year: "2017", field: "Computer vision", value: 6941 },
  { year: "2017", field: "Cybersecurity", value: 3162 },
  { year: "2017", field: "Large language models", value: 59 },
  { year: "2017", field: "Natural language processing", value: 1698 },
  { year: "2017", field: "Robotics", value: 3334 },
  { year: "2018", field: "AI safety", value: 257 },
  { year: "2018", field: "Artificial intelligence", value: 39701 },
  { year: "2018", field: "Chip design and fabrication", value: 8773 },
  { year: "2018", field: "Computer vision", value: 9328 },
  { year: "2018", field: "Cybersecurity", value: 4120 },
  { year: "2018", field: "Large language models", value: 266 },
  { year: "2018", field: "Natural language processing", value: 2219 },
  { year: "2018", field: "Robotics", value: 4464 },
  { year: "2019", field: "AI safety", value: 455 },
  { year: "2019", field: "Artificial intelligence", value: 50863 },
  { year: "2019", field: "Chip design and fabrication", value: 9872 },
  { year: "2019", field: "Computer vision", value: 12091 },
  { year: "2019", field: "Cybersecurity", value: 5404 },
  { year: "2019", field: "Large language models", value: 748 },
  { year: "2019", field: "Natural language processing", value: 2977 },
  { year: "2019", field: "Robotics", value: 5087 },
  { year: "2020", field: "AI safety", value: 836 },
  { year: "2020", field: "Artificial intelligence", value: 69439 },
  { year: "2020", field: "Chip design and fabrication", value: 10233 },
  { year: "2020", field: "Computer vision", value: 16272 },
  { year: "2020", field: "Cybersecurity", value: 7961 },
  { year: "2020", field: "Large language models", value: 1572 },
  { year: "2020", field: "Natural language processing", value: 3897 },
  { year: "2020", field: "Robotics", value: 5987 },
  { year: "2021", field: "AI safety", value: 975 },
  { year: "2021", field: "Artificial intelligence", value: 85305 },
  { year: "2021", field: "Chip design and fabrication", value: 9678 },
  { year: "2021", field: "Computer vision", value: 20722 },
  { year: "2021", field: "Cybersecurity", value: 8398 },
  { year: "2021", field: "Large language models", value: 2536 },
  { year: "2021", field: "Natural language processing", value: 4776 },
  { year: "2021", field: "Robotics", value: 6426 },
  { year: "2022", field: "AI safety", value: 645 },
  { year: "2022", field: "Artificial intelligence", value: 94101 },
  { year: "2022", field: "Chip design and fabrication", value: 9176 },
  { year: "2022", field: "Computer vision", value: 22052 },
  { year: "2022", field: "Cybersecurity", value: 8448 },
  { year: "2022", field: "Large language models", value: 2838 },
  { year: "2022", field: "Natural language processing", value: 4332 },
  { year: "2022", field: "Robotics", value: 7071 },
  { year: "2023", field: "AI safety", value: 1153 },
  { year: "2023", field: "Artificial intelligence", value: 108902 },
  { year: "2023", field: "Chip design and fabrication", value: 9781 },
  { year: "2023", field: "Computer vision", value: 26664 },
  { year: "2023", field: "Cybersecurity", value: 9235 },
  { year: "2023", field: "Large language models", value: 5216 },
  { year: "2023", field: "Natural language processing", value: 6097 },
  { year: "2023", field: "Robotics", value: 7090 },
];

// Fill missing field-year combos with 0 (AI safety & LLMs missing in 2015)
const ALL_FIELDS = Object.keys(FIELD_COLORS);
const ALL_YEARS = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

const existingKeys = new Set(fieldData.map((d) => `${d.year}|${d.field}`));
const filledData = [...fieldData];
ALL_YEARS.forEach((year) => {
  ALL_FIELDS.forEach((field) => {
    if (!existingKeys.has(`${year}|${field}`)) {
      filledData.push({ year, field, value: 0 });
    }
  });
});

// Sort: year ascending, then by field order for consistent stacking
const FIELD_ORDER = [
  "Artificial intelligence",
  "Computer vision",
  "Chip design and fabrication",
  "Cybersecurity",
  "Robotics",
  "Natural language processing",
  "Large language models",
  "AI safety",
];

filledData.sort((a, b) => {
  if (a.year !== b.year) return a.year.localeCompare(b.year);
  return FIELD_ORDER.indexOf(a.field) - FIELD_ORDER.indexOf(b.field);
});

const FieldGrowthArea = () => {
  const config = {
    data: filledData,
    xField: "year",
    yField: "value",
    seriesField: "field",
    colorField: "field",
    color: (datum: any) => {
      const name = typeof datum === "string" ? datum : datum?.field || "";
      return FIELD_COLORS[name] || "#94A3B8";
    },
    stack: true,
    smooth: true,
    style: {
      fillOpacity: 0.6,
    },
    axis: {
      x: {
        title: null,
      },
      y: {
        title: "Co-authored Articles",
        labelFormatter: (v: any) => {
          const num = Number(v);
          if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
          return String(num);
        },
      },
    },
    tooltip: {
      title: (d: any) => d?.year || "",
      items: [
        {
          field: "value",
          name: (d: any) => d?.field || "Articles",
          valueFormatter: (v: any) => Number(v).toLocaleString(),
        },
      ],
    },
    legend: {
      position: "top" as const,
    },
    animation: {
      appear: {
        animation: "wave-in",
        duration: 1500,
        easing: "ease-out",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 550 }}>
      <Area {...config} />
    </div>
  );
};

export default FieldGrowthArea;
