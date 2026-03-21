"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bar } from "@ant-design/plots";
import { COUNTRY_COLORS, FONT } from "./constants";

/*
 *  AI Publications Racing Bar — Top 15 Countries (2015–2023)
 *  Animated bar chart that auto-plays through years
 *  Data: racing_bar_data.json from country_ai_publications_master.csv
 *
 *  npm install @ant-design/plots
 */

const ALL_DATA: Record<number, { country: string; value: number }[]> = {
  2015: [
    { country: "China", value: 22117 },
    { country: "United States", value: 20544 },
    { country: "India", value: 8823 },
    { country: "Japan", value: 6663 },
    { country: "United Kingdom", value: 6067 },
    { country: "Germany", value: 6004 },
    { country: "France", value: 5476 },
    { country: "Italy", value: 3960 },
    { country: "Canada", value: 3396 },
    { country: "Spain", value: 3359 },
    { country: "South Korea", value: 3312 },
    { country: "South and Central America", value: 3214 },
    { country: "Australia", value: 2770 },
    { country: "Russia", value: 1254 },
    { country: "Indonesia", value: 859 },
  ],
  2016: [
    { country: "United States", value: 22432 },
    { country: "China", value: 21898 },
    { country: "India", value: 10330 },
    { country: "United Kingdom", value: 6910 },
    { country: "Japan", value: 6731 },
    { country: "Germany", value: 6273 },
    { country: "France", value: 5414 },
    { country: "Italy", value: 4008 },
    { country: "Canada", value: 3545 },
    { country: "South and Central America", value: 3146 },
    { country: "Spain", value: 3102 },
    { country: "South Korea", value: 3076 },
    { country: "Australia", value: 3047 },
    { country: "Russia", value: 1727 },
    { country: "Indonesia", value: 1180 },
  ],
  2017: [
    { country: "China", value: 26399 },
    { country: "United States", value: 25367 },
    { country: "India", value: 11554 },
    { country: "United Kingdom", value: 7598 },
    { country: "Japan", value: 7134 },
    { country: "Germany", value: 6726 },
    { country: "France", value: 5409 },
    { country: "Italy", value: 4199 },
    { country: "Canada", value: 3858 },
    { country: "South and Central America", value: 3642 },
    { country: "Spain", value: 3475 },
    { country: "South Korea", value: 3402 },
    { country: "Australia", value: 3221 },
    { country: "Russia", value: 2212 },
    { country: "Indonesia", value: 1805 },
  ],
  2018: [
    { country: "China", value: 35540 },
    { country: "United States", value: 31858 },
    { country: "India", value: 14137 },
    { country: "United Kingdom", value: 9059 },
    { country: "Japan", value: 8199 },
    { country: "Germany", value: 7917 },
    { country: "France", value: 6098 },
    { country: "Italy", value: 4754 },
    { country: "South and Central America", value: 4617 },
    { country: "Canada", value: 4605 },
    { country: "South Korea", value: 4252 },
    { country: "Australia", value: 3981 },
    { country: "Spain", value: 3762 },
    { country: "Russia", value: 2851 },
    { country: "Indonesia", value: 2640 },
  ],
  2019: [
    { country: "China", value: 47100 },
    { country: "United States", value: 39793 },
    { country: "India", value: 16059 },
    { country: "United Kingdom", value: 10858 },
    { country: "Germany", value: 9519 },
    { country: "Japan", value: 9294 },
    { country: "France", value: 6908 },
    { country: "Canada", value: 5920 },
    { country: "Italy", value: 5451 },
    { country: "South and Central America", value: 5225 },
    { country: "South Korea", value: 5192 },
    { country: "Australia", value: 4943 },
    { country: "Spain", value: 4331 },
    { country: "Russia", value: 3892 },
    { country: "Indonesia", value: 3295 },
  ],
  2020: [
    { country: "China", value: 54274 },
    { country: "United States", value: 47203 },
    { country: "India", value: 20701 },
    { country: "United Kingdom", value: 12954 },
    { country: "Germany", value: 11398 },
    { country: "Japan", value: 9683 },
    { country: "Canada", value: 7369 },
    { country: "France", value: 7295 },
    { country: "South Korea", value: 6741 },
    { country: "Italy", value: 6563 },
    { country: "South and Central America", value: 6003 },
    { country: "Australia", value: 5969 },
    { country: "Spain", value: 4729 },
    { country: "Russia", value: 4355 },
    { country: "Indonesia", value: 3854 },
  ],
  2021: [
    { country: "China", value: 71209 },
    { country: "United States", value: 50693 },
    { country: "India", value: 29105 },
    { country: "United Kingdom", value: 14486 },
    { country: "Germany", value: 13085 },
    { country: "Japan", value: 10191 },
    { country: "Canada", value: 8645 },
    { country: "South Korea", value: 8272 },
    { country: "France", value: 7601 },
    { country: "Italy", value: 7575 },
    { country: "Australia", value: 6706 },
    { country: "South and Central America", value: 6289 },
    { country: "Spain", value: 5297 },
    { country: "Russia", value: 4831 },
    { country: "Indonesia", value: 4559 },
  ],
  2022: [
    { country: "China", value: 82118 },
    { country: "United States", value: 43592 },
    { country: "India", value: 31406 },
    { country: "United Kingdom", value: 13650 },
    { country: "Germany", value: 12348 },
    { country: "Japan", value: 9853 },
    { country: "South Korea", value: 8810 },
    { country: "Canada", value: 7775 },
    { country: "Italy", value: 7647 },
    { country: "France", value: 7336 },
    { country: "Australia", value: 6308 },
    { country: "South and Central America", value: 5284 },
    { country: "Spain", value: 5211 },
    { country: "Indonesia", value: 5088 },
    { country: "Russia", value: 3664 },
  ],
  2023: [
    { country: "China", value: 103672 },
    { country: "United States", value: 50359 },
    { country: "India", value: 43816 },
    { country: "United Kingdom", value: 16520 },
    { country: "Germany", value: 13999 },
    { country: "Japan", value: 10929 },
    { country: "South Korea", value: 10298 },
    { country: "Italy", value: 9101 },
    { country: "Canada", value: 9020 },
    { country: "France", value: 7880 },
    { country: "Australia", value: 7744 },
    { country: "Indonesia", value: 7162 },
    { country: "South and Central America", value: 6104 },
    { country: "Spain", value: 5827 },
    { country: "Russia", value: 3641 },
  ],
};

const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

const AIPublicationsRacingBar = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentYear = YEARS[currentYearIndex];
  const currentData = ALL_DATA[currentYear]
    .sort((a, b) => a.value - b.value) // ascending for horizontal bar (top = highest)
    .map((d) => ({
      ...d,
      color: COUNTRY_COLORS[d.country] || "#94A3B8",
      label:
        d.value >= 1000 ? `${(d.value / 1000).toFixed(1)}K` : String(d.value),
    }));

  const play = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrentYearIndex((prev) => {
        if (prev >= YEARS.length - 1) {
          // Loop back to start after a pause
          return 0;
        }
        return prev + 1;
      });
    }, 1500);
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
    return () => stop();
  }, [isPlaying, play, stop]);

  const config = {
    data: currentData,
    xField: "country",
    yField: "value",
    colorField: "country",
    coordinate: { transform: [{ type: "transpose" }] },
    scale: {
      x: {
        domain: currentData.map((d) => d.country),
      },
      color: {
        domain: Object.keys(COUNTRY_COLORS),
        range: Object.values(COUNTRY_COLORS),
      },
    },
    style: {
      fill: (d: any) => {
        const name = d?.data?.country || d?.country || "";
        return COUNTRY_COLORS[name] || "#94A3B8";
      },
      fillOpacity: 0.88,
      radiusTopLeft: 4,
      radiusTopRight: 4,
    },
    label: {
      text: (d: any) => {
        const v = d?.value || 0;
        return v >= 1000 ? `${(v / 1000).toFixed(1)}K` : String(v);
      },
      position: "right",
      dx: 4,
      fontSize: 11,
      fill: "#555",
      fontWeight: 600,
    },
    axis: {
      x: {
        title: null,
        labelFontSize: 11,
        labelFill: "#555",
      },
      y: {
        title: null,
        labelFormatter: (v: any) => {
          const num = Number(v);
          if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
          return String(num);
        },
        labelFill: "#94A3B8",
        labelFontSize: 10,
        grid: true,
        gridLineWidth: 1,
        gridStroke: "#F1F5F9",
        gridLineDash: [4, 4],
      },
    },
    tooltip: {
      title: (d: any) => d?.country || "",
      items: [
        {
          field: "value",
          name: "AI Publications",
          valueFormatter: (v: any) => Number(v).toLocaleString(),
        },
      ],
    },
    legend: false as const,
    animation: {
      update: {
        duration: 1000,
        easing: "ease-in-out",
      },
    },
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Year display */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 64,
          fontSize: 72,
          fontWeight: 800,
          color: "rgba(0,0,0,0.06)",
          fontFamily: FONT,
          lineHeight: 1,
          zIndex: 1,
          pointerEvents: "none",
          transition: "all 0.3s ease",
        }}
      >
        {currentYear}
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 550 }}>
        <Bar {...config} />
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: "16px 0 0",
        }}
      >
        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid #E2E8F0",
            background: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: "#555",
            transition: "all 0.5s",
          }}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        {/* Year dots */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {YEARS.map((year, idx) => (
            <button
              key={year}
              onClick={() => {
                setCurrentYearIndex(idx);
                setIsPlaying(false);
              }}
              style={{
                width: idx === currentYearIndex ? 32 : 10,
                height: 10,
                borderRadius: 5,
                border: "none",
                background: idx === currentYearIndex ? "#5B9BD5" : "#E2E8F0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              title={String(year)}
            >
              {idx === currentYearIndex && (
                <span
                  style={{
                    position: "absolute",
                    top: -20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 10,
                    color: "#5B9BD5",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {year}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Speed label */}
        <span
          style={{
            fontSize: 10,
            color: "#94A3B8",
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          2s / year
        </span>
      </div>
    </div>
  );
};

export default AIPublicationsRacingBar;
