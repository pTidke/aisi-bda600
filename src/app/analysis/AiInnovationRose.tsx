"use client";

import React from "react";
import { Pie } from "@ant-design/charts";

const FONT = "'Josefin Sans', sans-serif";

const RAW_DATA = [
  {
    country: "United States",
    "AI Publications": 57494,
    "AI Patents": 59088,
    "Granted Patents": 33797,
    "AI Workers": 170061,
  },
  {
    country: "China",
    "AI Publications": 22665,
    "AI Patents": 48660,
    "Granted Patents": 22286,
    "AI Workers": 5342,
  },
  {
    country: "Japan",
    "AI Publications": 7325,
    "AI Patents": 11914,
    "Granted Patents": 6029,
    "AI Workers": 592,
  },
  {
    country: "Germany",
    "AI Publications": 5154,
    "AI Patents": 8407,
    "Granted Patents": 2970,
    "AI Workers": 2772,
  },
  {
    country: "South Korea",
    "AI Publications": 3140,
    "AI Patents": 8315,
    "Granted Patents": 3248,
    "AI Workers": 875,
  },
  {
    country: "Netherlands",
    "AI Publications": 1471,
    "AI Patents": 1688,
    "Granted Patents": 595,
    "AI Workers": 779,
  },
  {
    country: "Finland",
    "AI Publications": 967,
    "AI Patents": 1298,
    "Granted Patents": 319,
    "AI Workers": 482,
  },
  {
    country: "Switzerland",
    "AI Publications": 945,
    "AI Patents": 639,
    "Granted Patents": 186,
    "AI Workers": 2264,
  },
  {
    country: "United Kingdom",
    "AI Publications": 882,
    "AI Patents": 345,
    "Granted Patents": 227,
    "AI Workers": 14487,
  },
  {
    country: "Ireland",
    "AI Publications": 623,
    "AI Patents": 1141,
    "Granted Patents": 613,
    "AI Workers": 14807,
  },
  {
    country: "Others",
    "AI Publications": 316,
    "AI Patents": 572,
    "Granted Patents": 307,
    "AI Workers": 2287,
  },
];

const COUNTRY_COLORS: Record<string, string> = {
  "United States": "#5B9BD5",
  Japan: "#7EC8C8",
  China: "#ED7D7D",
  "South Korea": "#C4A484",
  Netherlands: "#F5A623",
  Germany: "#D5A6BD",
  "United Kingdom": "#9B59B6",
  Finland: "#4CD964",
  Switzerland: "#E8637A",
  Ireland: "#4C8BF5",
  Others: "#CBD5E1",
};

// Calculate Total index for basic rose chart
const data = RAW_DATA.map((row) => ({
  ...row,
  Total:
    row["AI Publications"] +
    row["AI Patents"] +
    row["Granted Patents"] +
    row["AI Workers"],
}));

export default function AiInnovationRose() {
  const config = {
    data,
    angleField: "Total", // In Pie charts, angleField determines the slice size
    colorField: "country",
    color: (d: any) => {
      const name = typeof d === "string" ? d : d?.country;
      return COUNTRY_COLORS[name] || "#94A3B8";
    },
    innerRadius: 0.45, // Makes it a Donut chart
    legend: false as const,
    labels: [
      {
        text: (d: any) => d.country + " (" + `${d.Total.toLocaleString()})`,
        style: {
          fontSize: 13,
          fontWeight: 500,
          fontFamily: FONT,
          fill: "#1E293B",
          position: "spider",
          transform: [
            {
              type: "overlapDodgeY",
            },
          ],
        },
      },
      // {
      //   text: (d: any) => `${d.Total.toLocaleString()}`,
      //   style: {
      //     fontSize: 12,
      //     dy: 14, // Pushes it right underneath the country name
      //     fill: "#000000ff",
      //     fontFamily: FONT,
      //     position: "spider",
      //     transform: [
      //       {
      //         type: "overlapDodgeY",
      //       },
      //     ],
      //   },
      // },
    ],
    style: {
      stroke: "#fff",
      inset: 0.5, // Gap between slices
      radius: 6, // Rounded edge corners
    },
    tooltip: {
      title: (d: any) => d.country,
      items: [
        // (d: any) => ({
        //   name: "Total Volume",
        //   value: d.Total.toLocaleString(),
        // }),
        (d: any) => ({
          name: "AI Workers",
          value: d["AI Workers"].toLocaleString(),
        }),
        (d: any) => ({
          name: "AI Publications",
          value: d["AI Publications"].toLocaleString(),
        }),
        (d: any) => ({
          name: "AI Patents",
          value: d["AI Patents"].toLocaleString(),
        }),
        (d: any) => ({
          name: "Granted Patents",
          value: d["Granted Patents"].toLocaleString(),
        }),
      ],
    },
  };

  return (
    <div style={{ width: "100%", height: 600 }}>
      {/* @ts-ignore */}
      <Pie {...config} />
    </div>
  );
}
