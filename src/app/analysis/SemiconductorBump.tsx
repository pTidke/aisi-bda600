"use client";

import React from "react";
import { Line } from "@ant-design/plots";

const COUNTRY_COLORS: Record<string, string> = {
  "United States": "#5B9BD5",
  Japan: "#7EC8C8",
  Netherlands: "#F5A623",
  Singapore: "#54A0FF",
  China: "#ED7D7D",
  "South Korea": "#C4A484",
  Germany: "#D5A6BD",
  Austria: "#FF9F43",
  Taiwan: "#70AD47",
  "United Kingdom": "#9B59B6",
};

const SHARE_DATA: Record<string, number[]> = {
  "United States": [47.0, 29.55, 36.45],
  Japan: [28.0, 9.24, 26.57],
  Netherlands: [0.0, 0.0, 10.09],
  Singapore: [0.0, 0.0, 8.28],
  China: [1.75, 11.67, 5.9],
  "South Korea": [2.5, 16.06, 4.26],
  Germany: [3.5, 15.15, 3.77],
  Austria: [0.0, 0.0, 2.43],
  Taiwan: [6.0, 11.21, 0.5],
  "United Kingdom": [11.0, 0.0, 0.09],
};

const YEARS = [2019, 2022, 2024];

function computeRankData() {
  const data: any[] = [];
  YEARS.forEach((year, yearIdx) => {
    const yearShares = Object.entries(SHARE_DATA).map(([country, shares]) => ({
      country,
      share: shares[yearIdx],
    }));
    yearShares.sort((a, b) => b.share - a.share);
    yearShares.forEach((item, rankIdx) => {
      data.push({
        year: String(year),
        country: item.country,
        rank: rankIdx + 1,
        share: item.share,
        color: COUNTRY_COLORS[item.country] || "#94A3B8",
      });
    });
  });
  return data;
}

const SemiconductorBump = () => {
  const rankData = computeRankData();
  const totalCountries = Object.keys(SHARE_DATA).length;

  const config = {
    paddingLeft: -100,
    paddingRight: 20,
    paddingTop: -30,
    data: rankData,
    xField: "year",
    yField: "rank",
    seriesField: "country",
    colorField: "country",
    color: (datum: any) => {
      const name = typeof datum === "string" ? datum : datum?.country || "";
      return COUNTRY_COLORS[name] || "#94A3B8";
    },
    scale: {
      y: {
        domain: [1, totalCountries], // Rank 1 at the top, Rank N at the bottom
        range: [0.05, 0.92], // Leaves 5% padding at top, 8% at bottom to separate from X-axis
      },
    },
    shapeField: "smooth",
    style: {
      lineWidth: 4,
      lineCap: "round",
      lineJoin: "round",
    },
    point: {
      shapeField: "circle",
      sizeField: 5,
      style: {
        fill: "#FFFFFF",
        lineWidth: 2,
        stroke: (d: any) => COUNTRY_COLORS[d.country] || "#94A3B8",
      },
    },
    label: {
      text: (d: any) => {
        if (d.year === "2024") {
          return `${d.rank}. ${d.country} (${Number(d.share).toFixed(1)}%)`;
        }
        return String(d.rank);
      },
      position: (d: any) => (d.year === "2024" ? "right" : "top"),
      dx: (d: any) => (d.year === "2024" ? 10 : 0),
      dy: (d: any) => (d.year === "2024" ? 0 : -16),
      fontSize: 11,
      fontWeight: 600,
      fill: (d: any) => COUNTRY_COLORS[d.country] || "#94A3B8",
    },
    axis: {
      x: {
        title: null,
        labelFontSize: 13,
        labelFontWeight: 600,
        labelFill: "#64748B",
        labelSpacing: 0, // Pushes year labels further down
        line: null,
        tick: null,
        grid: { line: { style: { stroke: "#E2E8F0", lineDash: [4, 4] } } },
      },
      y: {
        title: null,
        labelFontSize: 11,
        labelFill: "#94A3B8",
        grid: null,
        line: null,
        tick: null,
      },
    },
    tooltip: {
      title: (d: any) => `${d.year} Rankings`,
      items: [
        (d: any) => ({
          name: d.country,
          color: COUNTRY_COLORS[d.country] || "#94A3B8",
          value: `Rank ${d.rank}  (${Number(d.share).toFixed(1)}%)`,
        }),
      ],
    },
    legend: false as const,
    animation: {
      appear: {
        animation: "path-in",
        duration: 1500,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 520 }}>
      <Line {...config} />
    </div>
  );
};

export default SemiconductorBump;
