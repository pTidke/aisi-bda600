"use client";

import React from "react";
import { Line } from "@ant-design/plots";

/*
 *  US-China AI Research Collaboration by Field (2015–2023)
 *  Multi-line showing individual field trajectories
 *  Data: us_china_collab_data.json
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

const FIELD_ORDER = [
  "Artificial intelligence",
  "Computer vision",
  "Chip design and fabrication",
  "Large language models",
  "Cybersecurity",
  "Natural language processing",
  "Robotics",
  "AI safety",
];

const rawData = [
  { year: "2015", field: "Artificial intelligence", value: 1842 },
  { year: "2015", field: "Chip design and fabrication", value: 614 },
  { year: "2015", field: "Computer vision", value: 826 },
  { year: "2015", field: "Cybersecurity", value: 333 },
  { year: "2015", field: "Natural language processing", value: 161 },
  { year: "2015", field: "Robotics", value: 212 },
  { year: "2016", field: "Artificial intelligence", value: 2244 },
  { year: "2016", field: "Chip design and fabrication", value: 774 },
  { year: "2016", field: "Computer vision", value: 971 },
  { year: "2016", field: "Cybersecurity", value: 456 },
  { year: "2016", field: "Large language models", value: 29 },
  { year: "2016", field: "Natural language processing", value: 199 },
  { year: "2016", field: "Robotics", value: 245 },
  { year: "2017", field: "AI safety", value: 52 },
  { year: "2017", field: "Artificial intelligence", value: 2841 },
  { year: "2017", field: "Chip design and fabrication", value: 872 },
  { year: "2017", field: "Computer vision", value: 1210 },
  { year: "2017", field: "Cybersecurity", value: 557 },
  { year: "2017", field: "Large language models", value: 59 },
  { year: "2017", field: "Natural language processing", value: 205 },
  { year: "2017", field: "Robotics", value: 289 },
  { year: "2018", field: "AI safety", value: 98 },
  { year: "2018", field: "Artificial intelligence", value: 3913 },
  { year: "2018", field: "Chip design and fabrication", value: 953 },
  { year: "2018", field: "Computer vision", value: 1629 },
  { year: "2018", field: "Cybersecurity", value: 696 },
  { year: "2018", field: "Large language models", value: 132 },
  { year: "2018", field: "Natural language processing", value: 292 },
  { year: "2018", field: "Robotics", value: 407 },
  { year: "2019", field: "AI safety", value: 135 },
  { year: "2019", field: "Artificial intelligence", value: 5217 },
  { year: "2019", field: "Chip design and fabrication", value: 1076 },
  { year: "2019", field: "Computer vision", value: 2061 },
  { year: "2019", field: "Cybersecurity", value: 758 },
  { year: "2019", field: "Large language models", value: 257 },
  { year: "2019", field: "Natural language processing", value: 428 },
  { year: "2019", field: "Robotics", value: 493 },
  { year: "2020", field: "AI safety", value: 200 },
  { year: "2020", field: "Artificial intelligence", value: 6151 },
  { year: "2020", field: "Chip design and fabrication", value: 1020 },
  { year: "2020", field: "Computer vision", value: 2324 },
  { year: "2020", field: "Cybersecurity", value: 888 },
  { year: "2020", field: "Large language models", value: 446 },
  { year: "2020", field: "Natural language processing", value: 532 },
  { year: "2020", field: "Robotics", value: 536 },
  { year: "2021", field: "AI safety", value: 210 },
  { year: "2021", field: "Artificial intelligence", value: 6435 },
  { year: "2021", field: "Chip design and fabrication", value: 889 },
  { year: "2021", field: "Computer vision", value: 2456 },
  { year: "2021", field: "Cybersecurity", value: 799 },
  { year: "2021", field: "Large language models", value: 634 },
  { year: "2021", field: "Natural language processing", value: 602 },
  { year: "2021", field: "Robotics", value: 521 },
  { year: "2022", field: "AI safety", value: 166 },
  { year: "2022", field: "Artificial intelligence", value: 5665 },
  { year: "2022", field: "Chip design and fabrication", value: 746 },
  { year: "2022", field: "Computer vision", value: 2089 },
  { year: "2022", field: "Cybersecurity", value: 675 },
  { year: "2022", field: "Large language models", value: 617 },
  { year: "2022", field: "Natural language processing", value: 500 },
  { year: "2022", field: "Robotics", value: 556 },
  { year: "2023", field: "AI safety", value: 216 },
  { year: "2023", field: "Artificial intelligence", value: 6183 },
  { year: "2023", field: "Chip design and fabrication", value: 721 },
  { year: "2023", field: "Computer vision", value: 2189 },
  { year: "2023", field: "Cybersecurity", value: 723 },
  { year: "2023", field: "Large language models", value: 929 },
  { year: "2023", field: "Natural language processing", value: 624 },
  { year: "2023", field: "Robotics", value: 545 },
];

// Fill missing field-year combos with 0
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
const existingKeys = new Set(rawData.map((d) => `${d.year}|${d.field}`));
const filledData = [...rawData];
ALL_YEARS.forEach((year) => {
  FIELD_ORDER.forEach((field) => {
    if (!existingKeys.has(`${year}|${field}`)) {
      filledData.push({ year, field, value: 0 });
    }
  });
});

filledData.sort((a, b) => {
  if (a.year !== b.year) return a.year.localeCompare(b.year);
  return FIELD_ORDER.indexOf(a.field) - FIELD_ORDER.indexOf(b.field);
});

const USChinaCollabLine = () => {
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
    smooth: true,
    style: {
      lineWidth: 2.5,
    },
    point: {
      shapeField: "circle",
      sizeField: 4,
    },
    label: false,
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
      title: (d: any) => `US ↔ China · ${d?.year || ""}`,
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
        animation: "path-in",
        duration: 1500,
        easing: "ease-out",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 520 }}>
      <Line {...config} />
    </div>
  );
};

export default USChinaCollabLine;
