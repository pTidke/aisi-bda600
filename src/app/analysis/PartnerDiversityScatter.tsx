"use client";

import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { COUNTRY_COLORS, FONT } from "./constants";
import data from "./partner_diversity_data.json";

// FONT is now imported from constants.ts

// COUNTRY_COLORS is now imported from constants.ts

interface ChartDataItem {
  country: string;
  n_partners: number;
  total_volume: number;
  n_fields: number;
  avg_per_partner: number;
  is_top15: boolean;
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
    const countryColor = COUNTRY_COLORS[item.country] || "#1E293B";
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
          {item.country}
        </p>
        <div
          style={{
            marginTop: "8px",
            borderTop: "1px solid #F1F5F9",
            paddingTop: "8px",
          }}
        >
          <p style={{ margin: 0, color: "#64748B", fontSize: "12px" }}>
            Total Co-authored Articles:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {item.total_volume.toLocaleString()}
            </span>
          </p>
          <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: "12px" }}>
            Collaboration Partners:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {item.n_partners.toLocaleString()}
            </span>
          </p>
          <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: "12px" }}>
            Active Fields:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {item.n_fields}
            </span>
          </p>
          <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: "12px" }}>
            Avg Volume per Partner:{" "}
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {Math.round(item.avg_per_partner).toLocaleString()}
            </span>
          </p>
        </div>
        {item.is_top15 && (
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
            ★ Global Hub
          </p>
        )}
      </div>
    );
  }
  return null;
};

const PartnerDiversityScatter = () => {
  const chartData = data.map((d) => ({
    ...d,
    x: d.n_partners,
    y: d.total_volume,
    z: d.n_fields,
  }));

  const top15Data = chartData.filter((d) => d.is_top15);
  const othersData = chartData.filter((d) => !d.is_top15);

  const top15Countries = Array.from(
    new Set(top15Data.map((d) => d.country)),
  ).sort();

  // Simple overlap prevention for labels
  const labelsToRender: ChartDataItem[] = [];
  const maxX = Math.max(...chartData.map((d) => d.x)) || 1;
  const maxY = Math.max(...chartData.map((d) => d.y)) || 1;

  top15Data
    .sort((a, b) => b.y + b.x * 1000 - (a.y + a.x * 1000))
    .forEach((d) => {
      const isOverlap = labelsToRender.some((placed) => {
        const dx = Math.abs(placed.x - d.x) / maxX;
        const dy = Math.abs(placed.y - d.y) / maxY;
        return dx < 0.1 && dy < 0.08;
      });
      if (!isOverlap) {
        labelsToRender.push(d as ChartDataItem);
      }
    });

  return (
    <div style={{ width: "100%", height: 600, marginTop: "20px" }}>
      {/* Legend */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "left",
          marginBottom: "18px",
          padding: "0 10px",
          fontFamily: FONT,
        }}
      >
        {top15Countries.map((country) => {
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
                  backgroundColor: color,
                  borderRadius: "0px",
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
            top: 30,
            right: 40,
            bottom: 45,
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
            name="Unique Partners"
            domain={["auto", "auto"]}
            tick={{ fill: "#64748B", fontSize: 12, fontFamily: FONT }}
            axisLine={{ stroke: "#E2E8F0" }}
            tickLine={false}
            label={{
              value: "Unique Collaboration Partners",
              position: "bottom",
              offset: 25,
              fill: "#475569",
              fontSize: 14,
              fontFamily: FONT,
              fontWeight: 600,
            }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Total Volume"
            domain={["auto", "auto"]}
            tick={{
              fill: "#64748B",
              fontSize: 12,
              fontFamily: FONT,
            }}
            tickFormatter={(v: number) =>
              v >= 1000 ? `${v / 1000}k` : v.toString()
            }
            axisLine={{ stroke: "#E2E8F0" }}
            tickLine={false}
            label={{
              value: "Total Co-authored Articles",
              angle: -90,
              position: "insideLeft",
              offset: -10,
              dy: 40,
              fill: "#475569",
              fontSize: 14,
              fontFamily: FONT,
              fontWeight: 600,
            }}
          />
          <ZAxis dataKey="z" type="number" range={[50, 800]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: "3 3" }}
          />

          {/* Others */}
          <Scatter name="Others" data={othersData} shape="circle">
            {othersData.map((entry, index) => (
              <Cell
                key={`cell-others-${index}`}
                fill="#CBD5E1"
                fillOpacity={0.35}
                stroke="none"
              />
            ))}
          </Scatter>

          {/* Top 15 */}
          <Scatter name="Top 15" data={top15Data} shape="circle">
            {top15Data.map((entry, index) => {
              const countryColor = COUNTRY_COLORS[entry.country] || "#94A3B8";
              return (
                <Cell
                  key={`cell-top15-${index}`}
                  fill={countryColor}
                  fillOpacity={0.85}
                  stroke="#000000ff"
                  strokeWidth={1.25}
                  style={{
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
                  }}
                />
              );
            })}
          </Scatter>

          {/* Labels for hubs */}
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
                    {d.country}
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

export default PartnerDiversityScatter;
