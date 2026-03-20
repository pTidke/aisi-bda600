"use client";

import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ZAxis,
} from "recharts";
import data from "./parat_scatter_data.json";

const FONT = "'Josefin Sans', sans-serif";

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
  Taiwan: "#70AD47",
  Singapore: "#54A0FF",
  Austria: "#FF9F43",
};

interface ChartDataItem {
  Name: string;
  Country: string;
  "Publications: AI publications": number;
  "Publications: Citations to AI research": number;
  "Patents: AI patents": number;
  is_top20: boolean;
  log_pubs: number;
  log_cit: number;
  x: number;
  y: number;
  z: number;
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: ChartDataItem }>;
}) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    const countryColor = COUNTRY_COLORS[item.Country] || "#1E293B";
    return (
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "12px",
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          fontFamily: FONT,
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: 700,
            color: countryColor,
            fontSize: "14px",
          }}
        >
          {item.Name}
        </p>
        <p style={{ margin: "4px 0 0", color: "#64748B", fontSize: "12px" }}>
          Country:{" "}
          <span style={{ color: "#334155", fontWeight: 500 }}>
            {item.Country}
          </span>
        </p>
        <div
          style={{
            marginTop: "8px",
            borderTop: "1px solid #F1F5F9",
            paddingTop: "8px",
          }}
        >
          <p style={{ margin: 0, color: "#64748B", fontSize: "12px" }}>
            Publications:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {item["Publications: AI publications"].toLocaleString()}
            </span>
          </p>
          <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: "12px" }}>
            Citations:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {item["Publications: Citations to AI research"].toLocaleString()}
            </span>
          </p>
          <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: "12px" }}>
            AI Patents:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {item["Patents: AI patents"].toLocaleString()}
            </span>
          </p>
        </div>
        {item.is_top20 && (
          <p
            style={{
              margin: "8px 0 0",
              color: "#F59E0B",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            ★ Top 20 Organization
          </p>
        )}
      </div>
    );
  }
  return null;
};

const ResearchScatterChart = () => {
  const chartData = data
    .map((d) => ({
      ...d,
      x: d["Publications: AI publications"],
      y: d["Publications: Citations to AI research"],
      z: d["Patents: AI patents"],
    }))
    .sort((a, b) => b.z - a.z); // Render larger ones first (at the bottom)

  const top20Data = chartData.filter((d) => d.is_top20);
  const othersData = chartData.filter((d) => !d.is_top20);

  // Countries in top 20 as requested for the legend
  const top20Countries = Array.from(
    new Set(top20Data.map((d) => d.Country)),
  ).sort();

  // Simple overlap prevention for labels
  const labelsToRender: ChartDataItem[] = [];
  const maxX = Math.max(...chartData.map((d) => d.x)) || 1;
  const maxY = Math.max(...chartData.map((d) => d.y)) || 1;

  top20Data
    .sort((a, b) => b.y + b.x * 10 - (a.y + a.x * 10)) // Prioritize higher impact for labels
    .forEach((d) => {
      const isOverlap = labelsToRender.some((placed) => {
        const dx = Math.abs(placed.x - d.x) / maxX;
        const dy = Math.abs(placed.y - d.y) / maxY;
        return dx < 0.12 && dy < 0.08; // Thresholds for overlap
      });
      if (!isOverlap) {
        labelsToRender.push(d);
      }
    });

  return (
    <div style={{ width: "100%", height: 650, marginTop: "20px" }}>
      {/* Country Legend (Top 20 only) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "left",
          marginBottom: "18px",
          padding: "0 20px",
          fontFamily: FONT,
        }}
      >
        {top20Countries.map((country) => {
          const color = COUNTRY_COLORS[country] || "#94A3B8";
          return (
            <div
              key={country}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: color, // Square icon as requested
                  borderRadius: "2px",
                }}
              />
              <span
                style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}
              >
                {country}
              </span>
            </div>
          );
        })}
      </div>

      <ResponsiveContainer width="100%" height={520}>
        <ScatterChart
          margin={{
            top: 20,
            right: 40,
            bottom: 60,
            left: 20,
          }}
          style={{ outline: "none" }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F1F5F9"
            vertical={false}
          />
          <XAxis
            type="number"
            dataKey="x"
            name="Publications"
            domain={["auto", "auto"]}
            tick={{ fill: "#64748B", fontSize: 12, fontFamily: FONT }}
            axisLine={{ stroke: "#E2E8F0" }}
            tickLine={false}
            label={{
              value: "AI Publications",
              position: "bottom",
              offset: 40,
              fill: "#475569",
              fontSize: 14,
              fontFamily: FONT,
              fontWeight: 600,
            }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Citations"
            domain={["auto", "auto"]}
            tick={{ fill: "#64748B", fontSize: 12, fontFamily: FONT }}
            axisLine={{ stroke: "#E2E8F0" }}
            tickLine={false}
            label={{
              value: "Citations",
              angle: -90,
              position: "insideLeft",
              offset: -10,
              fill: "#475569",
              fontSize: 14,
              fontFamily: FONT,
              fontWeight: 600,
            }}
          />
          <ZAxis dataKey="z" type="number" range={[40, 1000]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: "3 3" }}
          />

          {/* Others (Circles) */}
          <Scatter name="Others" data={othersData} shape="circle">
            {othersData.map((entry, index) => {
              const countryColor = COUNTRY_COLORS[entry.Country] || "#94A3B8";
              return (
                <Cell
                  key={`cell-others-${index}`}
                  fill={countryColor}
                  fillOpacity={0.25}
                  stroke="none"
                />
              );
            })}
          </Scatter>

          {/* Top 20 (Squares) */}
          <Scatter name="Top 20" data={top20Data} shape="circle">
            {top20Data.map((entry, index) => {
              const countryColor = COUNTRY_COLORS[entry.Country] || "#94A3B8";
              return (
                <Cell
                  key={`cell-top20-${index}`}
                  fill={countryColor}
                  fillOpacity={0.7}
                  stroke="#1E293B"
                  strokeWidth={1.5}
                  style={{
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  }}
                />
              );
            })}
          </Scatter>

          {/* Render labels using the overlap-checked list */}
          {labelsToRender.map((d, i) => (
            <Scatter
              key={`label-${i}`}
              data={[d]}
              shape={(props: { cx?: number; cy?: number }) => {
                const { cx, cy } = props;
                if (cx === undefined || cy === undefined) return null;
                return (
                  <text
                    x={cx}
                    y={cy}
                    dy={-22}
                    textAnchor="middle"
                    fill="#1E293B"
                    fontSize={10}
                    fontWeight={700}
                    fontFamily={FONT}
                    style={{ pointerEvents: "none" }}
                  >
                    {d.Name}
                  </text>
                );
              }}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResearchScatterChart;
