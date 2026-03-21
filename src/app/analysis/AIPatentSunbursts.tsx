"use client";

import React, { useState, useCallback, useMemo } from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { FONT, REGION_COLORS, COUNTRY_COLORS, CHART_THEME } from "./constants";

const FIELD_COLORS: Record<string, string> = {
  "Personal Devices": "#5B9BD5",
  Business: "#ED7D7D",
  Telecom: "#F5A623",
  "Life Sciences": "#4CD964",
  Energy: "#FF9F43",
  Transportation: "#7EC8C8",
  Manufacturing: "#C4A484",
  "Phys. Sciences": "#9B59B6",
  Security: "#54A0FF",
  Finance: "#E67E22",
  Agriculture: "#2ECC71",
  Other: "#CBD5E1",
};

const ALL_COLORS: Record<string, string> = {
  ...REGION_COLORS,
  ...COUNTRY_COLORS,
  ...FIELD_COLORS,
  "Global AI Patents": "#64748B",
  "European Patent Org": "#94A3B8",
};

interface SunburstNode {
  name: string;
  id: string;
  color: string;
  value?: number;
  children?: SunburstNode[];
}

// Add unique IDs to every node by combining parent path
function injectColors(
  node: Record<string, unknown>,
  parentPath: string = "",
): SunburstNode {
  const name = node.name as string;
  const uniqueId = parentPath ? `${parentPath}/${name}` : name;
  const result: SunburstNode = {
    name,
    id: uniqueId,
    color: ALL_COLORS[name] || "#CBD5E1",
  };
  if (node.value !== undefined) {
    result.value = node.value as number;
  }
  if (Array.isArray(node.children)) {
    result.children = node.children.map((c) =>
      injectColors(c as Record<string, unknown>, uniqueId),
    );
  }
  return result;
}

const ROOT_DATA: SunburstNode = injectColors({
  name: "Global AI Patents",
  children: [
    {
      name: "Asia-Pacific",
      children: [
        {
          name: "China",
          children: [
            { name: "Personal Devices", value: 20733 },
            { name: "Business", value: 5397 },
            { name: "Telecom", value: 4969 },
            { name: "Life Sciences", value: 3574 },
            { name: "Energy", value: 2796 },
            { name: "Transportation", value: 2133 },
            { name: "Manufacturing", value: 2016 },
            { name: "Security", value: 1321 },
            { name: "Finance", value: 1275 },
            { name: "Other", value: 1957 },
          ],
        },
        {
          name: "Japan",
          children: [
            { name: "Personal Devices", value: 2889 },
            { name: "Life Sciences", value: 1294 },
            { name: "Transportation", value: 1244 },
            { name: "Telecom", value: 988 },
            { name: "Manufacturing", value: 649 },
            { name: "Business", value: 633 },
            { name: "Other", value: 1100 },
          ],
        },
        {
          name: "South Korea",
          children: [
            { name: "Personal Devices", value: 2767 },
            { name: "Telecom", value: 1526 },
            { name: "Life Sciences", value: 1276 },
            { name: "Business", value: 1123 },
            { name: "Transportation", value: 733 },
            { name: "Other", value: 2050 },
          ],
        },
        {
          name: "India",
          children: [
            { name: "Personal Devices", value: 477 },
            { name: "Business", value: 178 },
            { name: "Telecom", value: 134 },
            { name: "Life Sciences", value: 113 },
            { name: "Other", value: 167 },
          ],
        },
        {
          name: "Singapore",
          children: [
            { name: "Personal Devices", value: 186 },
            { name: "Life Sciences", value: 118 },
            { name: "Other", value: 332 },
          ],
        },
      ],
    },
    {
      name: "Americas",
      children: [
        {
          name: "United States",
          children: [
            { name: "Personal Devices", value: 18456 },
            { name: "Telecom", value: 8036 },
            { name: "Business", value: 5310 },
            { name: "Life Sciences", value: 4867 },
            { name: "Transportation", value: 4160 },
            { name: "Security", value: 2367 },
            { name: "Finance", value: 1675 },
            { name: "Manufacturing", value: 1206 },
            { name: "Other", value: 1936 },
          ],
        },
        {
          name: "Canada",
          children: [
            { name: "Personal Devices", value: 764 },
            { name: "Life Sciences", value: 535 },
            { name: "Telecom", value: 300 },
            { name: "Business", value: 297 },
            { name: "Other", value: 801 },
          ],
        },
      ],
    },
    {
      name: "Europe",
      children: [
        {
          name: "Germany",
          children: [
            { name: "Transportation", value: 546 },
            { name: "Personal Devices", value: 452 },
            { name: "Telecom", value: 222 },
            { name: "Life Sciences", value: 170 },
            { name: "Manufacturing", value: 133 },
            { name: "Other", value: 340 },
          ],
        },
        {
          name: "United Kingdom",
          children: [
            { name: "Personal Devices", value: 436 },
            { name: "Telecom", value: 190 },
            { name: "Life Sciences", value: 178 },
            { name: "Business", value: 130 },
            { name: "Other", value: 413 },
          ],
        },
        {
          name: "Russia",
          children: [
            { name: "Personal Devices", value: 293 },
            { name: "Telecom", value: 106 },
            { name: "Life Sciences", value: 100 },
            { name: "Other", value: 243 },
          ],
        },
      ],
    },
    {
      name: "Oceania",
      children: [
        {
          name: "Australia",
          children: [
            { name: "Personal Devices", value: 521 },
            { name: "Life Sciences", value: 391 },
            { name: "Telecom", value: 217 },
            { name: "Business", value: 202 },
            { name: "Other", value: 530 },
          ],
        },
      ],
    },
    {
      name: "Other",
      children: [
        {
          name: "European Patent Org",
          children: [
            { name: "Personal Devices", value: 520 },
            { name: "Life Sciences", value: 324 },
            { name: "Telecom", value: 212 },
            { name: "Other", value: 451 },
          ],
        },
      ],
    },
  ],
});

function getTotal(node: SunburstNode): number {
  if (node.value !== undefined) return node.value;
  if (node.children)
    return node.children.reduce((sum, c) => sum + getTotal(c), 0);
  return 0;
}

const AIPatentSunburst = () => {
  // Store full path of data objects — solves breadcrumb navigation
  const [path, setPath] = useState<SunburstNode[]>([ROOT_DATA]);

  // Current data is always the last item in path
  const data = path[path.length - 1];
  const total = useMemo(() => getTotal(data), [data]);
  const isRoot = path.length === 1;
  const isLeafLevel = !data.children?.[0]?.children;

  // Drill down: push new node onto path
  const handleClick = useCallback(
    (clickedData: { id: string; value: number; data: SunburstNode }) => {
      if (clickedData.data.children && clickedData.data.children.length > 0) {
        setPath((prev) => [...prev, clickedData.data]);
      }
    },
    [],
  );

  // Breadcrumb: slice path to exact level clicked
  const handleBreadcrumbClick = useCallback((index: number) => {
    setPath((prev) => {
      if (index >= prev.length - 1) return prev; // already here
      return prev.slice(0, index + 1);
    });
  }, []);

  // Center click: go up one level
  const handleCenterClick = useCallback(() => {
    setPath((prev) => {
      if (prev.length <= 1) return prev; // already at root
      return prev.slice(0, -1);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: 650,
        position: "relative",
        marginBottom: 30,
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          padding: "0 0 8px",
          flexWrap: "wrap",
          minHeight: 28,
        }}
      >
        {path.map((node, idx) => (
          <React.Fragment key={`${node.name}-${idx}`}>
            {idx > 0 && (
              <span style={{ color: "#94A3B8", fontSize: 12 }}>/</span>
            )}
            <button
              onClick={() => handleBreadcrumbClick(idx)}
              style={{
                background: "none",
                border: "none",
                cursor: idx < path.length - 1 ? "pointer" : "default",
                color: idx < path.length - 1 ? "#000000ff" : "#000000ff",
                fontWeight: idx === path.length - 1 ? 400 : 400,
                fontSize: 12,
                fontFamily: FONT,
                padding: "2px 2px",
                borderRadius: 4,
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => {
                if (idx < path.length - 1) {
                  (e.target as HTMLElement).style.background = "#F1F5F9";
                }
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "none";
              }}
            >
              {node.name}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Center label — clickable to go back */}
      <div
        onClick={handleCenterClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          textAlign: "center",
          zIndex: 1,
          cursor: isRoot ? "default" : "pointer",
          padding: "16px 24px",
          borderRadius: 12,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!isRoot) {
            (e.target as HTMLElement).style.background =
              "rgba(241,245,249,0.8)";
          }
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.background = "transparent";
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#1E293B",
            fontFamily: FONT,
            pointerEvents: "none",
          }}
        >
          {total.toLocaleString()}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#64748B",
            fontFamily: FONT,
            fontWeight: 600,
            pointerEvents: "none",
            marginTop: 2,
          }}
        >
          {data.name}
        </div>
        {!isRoot && (
          <div
            style={{
              fontSize: 10,
              color: "#94A3B8",
              fontFamily: FONT,
              marginTop: 6,
              pointerEvents: "none",
              letterSpacing: 0.5,
            }}
          >
            ← click to go back
          </div>
        )}
      </div>

      {/* Chart */}
      <ResponsiveSunburst
        data={data}
        id="id"
        value="value"
        cornerRadius={3}
        borderWidth={2}
        borderColor="#ffffff"
        inheritColorFromParent={false}
        colors={(d) => (d.data as SunburstNode).color || "#CBD5E1"}
        enableArcLabels
        arcLabelsTextColor="#1E293B"
        arcLabelsSkipAngle={18} // was 12, skip more small slices
        arcLabel={(d) => {
          const fullId = String(d.id);
          const displayName = fullId.split("/").pop() || fullId;
          const pct = ((d.value / total) * 100).toFixed(1);
          if (d.value / total < 0.05) return "";
          if (displayName.length > 15) return `${pct}%`;
          return `${displayName} (${pct}%)`;
        }}
        onClick={
          isLeafLevel
            ? undefined
            : (handleClick as Parameters<
                typeof ResponsiveSunburst
              >[0]["onClick"])
        }
        tooltip={({ id, value, percentage }) => {
          const displayName = String(id).split("/").pop() || id;
          const parentPath = String(id).split("/").slice(0, -1).join(" › ");
          return (
            <div
              style={{
                ...CHART_THEME.tooltip.container,
                minWidth: 220,
                padding: "12px 16px",
              }}
            >
              {parentPath && (
                <div
                  style={{ fontSize: 10, color: "#94A3B8", marginBottom: 4 }}
                >
                  {parentPath}
                </div>
              )}
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 6,
                  color: "#1E293B",
                }}
              >
                {displayName}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <span style={{ color: "#64748B" }}>Patents</span>
                <span style={{ fontWeight: 600, color: "#1E293B" }}>
                  {Number(value).toLocaleString()}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <span style={{ color: "#64748B" }}>Share</span>
                <span style={{ fontWeight: 600, color: "#1E293B" }}>
                  {percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          );
        }}
        transitionMode="pushIn"
        motionConfig="gentle"
        animate
      />
    </div>
  );
};

export default AIPatentSunburst;
