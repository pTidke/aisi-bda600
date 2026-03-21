"use client";

import React from "react";
import dynamic from "next/dynamic";

import { FONT, REGION_COLORS, FIELD_COLORS } from "./constants";

// REGION_COLORS and FIELD_COLORS are now imported from constants.ts

const sunburstData = {
  name: "Global AI Patents",
  sum: 124178,
  children: [
    {
      name: "Asia-Pacific",
      sum: 66148,
      children: [
        {
          name: "China",
          sum: 46171,
          children: [
            { name: "Personal Devices", sum: 20733 },
            { name: "Business", sum: 5397 },
            { name: "Telecom", sum: 4969 },
            { name: "Life Sciences", sum: 3574 },
            { name: "Energy", sum: 2796 },
            { name: "Transportation", sum: 2133 },
            { name: "Other", sum: 6569 },
          ],
        },
        {
          name: "Japan",
          sum: 8797,
          children: [
            { name: "Personal Devices", sum: 2889 },
            { name: "Life Sciences", sum: 1294 },
            { name: "Transportation", sum: 1244 },
            { name: "Telecom", sum: 988 },
            { name: "Manufacturing", sum: 649 },
            { name: "Business", sum: 633 },
            { name: "Other", sum: 1100 },
          ],
        },
        {
          name: "South Korea",
          sum: 9475,
          children: [
            { name: "Personal Devices", sum: 2767 },
            { name: "Telecom", sum: 1526 },
            { name: "Life Sciences", sum: 1276 },
            { name: "Business", sum: 1123 },
            { name: "Transportation", sum: 733 },
            { name: "Manufacturing", sum: 491 },
            { name: "Other", sum: 1559 },
          ],
        },
        {
          name: "India",
          sum: 1069,
          children: [
            { name: "Personal Devices", sum: 477 },
            { name: "Business", sum: 178 },
            { name: "Telecom", sum: 134 },
            { name: "Life Sciences", sum: 113 },
            { name: "Security", sum: 40 },
            { name: "Transportation", sum: 36 },
            { name: "Other", sum: 91 },
          ],
        },
        {
          name: "Singapore",
          sum: 636,
          children: [
            { name: "Personal Devices", sum: 186 },
            { name: "Life Sciences", sum: 118 },
            { name: "Telecom", sum: 86 },
            { name: "Business", sum: 73 },
            { name: "Security", sum: 42 },
            { name: "Finance", sum: 41 },
            { name: "Other", sum: 90 },
          ],
        },
      ],
    },
    {
      name: "Oceania",
      sum: 1861,
      children: [
        {
          name: "Australia",
          sum: 1861,
          children: [
            { name: "Personal Devices", sum: 521 },
            { name: "Life Sciences", sum: 391 },
            { name: "Telecom", sum: 217 },
            { name: "Business", sum: 202 },
            { name: "Transportation", sum: 100 },
            { name: "Security", sum: 88 },
            { name: "Other", sum: 342 },
          ],
        },
      ],
    },
    {
      name: "Americas",
      sum: 50710,
      children: [
        {
          name: "United States",
          sum: 48013,
          children: [
            { name: "Personal Devices", sum: 18456 },
            { name: "Telecom", sum: 8036 },
            { name: "Business", sum: 5310 },
            { name: "Life Sciences", sum: 4867 },
            { name: "Transportation", sum: 4160 },
            { name: "Security", sum: 2367 },
            { name: "Other", sum: 4817 },
          ],
        },
        {
          name: "Canada",
          sum: 2697,
          children: [
            { name: "Personal Devices", sum: 764 },
            { name: "Life Sciences", sum: 535 },
            { name: "Telecom", sum: 300 },
            { name: "Business", sum: 297 },
            { name: "Transportation", sum: 190 },
            { name: "Phys. Sciences", sum: 146 },
            { name: "Other", sum: 465 },
          ],
        },
      ],
    },
    {
      name: "Europe",
      sum: 3952,
      children: [
        {
          name: "Germany",
          sum: 1863,
          children: [
            { name: "Transportation", sum: 546 },
            { name: "Personal Devices", sum: 452 },
            { name: "Telecom", sum: 222 },
            { name: "Life Sciences", sum: 170 },
            { name: "Manufacturing", sum: 133 },
            { name: "Business", sum: 97 },
            { name: "Other", sum: 243 },
          ],
        },
        {
          name: "United Kingdom",
          sum: 1347,
          children: [
            { name: "Personal Devices", sum: 436 },
            { name: "Telecom", sum: 190 },
            { name: "Life Sciences", sum: 178 },
            { name: "Business", sum: 130 },
            { name: "Transportation", sum: 120 },
            { name: "Security", sum: 80 },
            { name: "Other", sum: 213 },
          ],
        },
        {
          name: "Russia",
          sum: 742,
          children: [
            { name: "Personal Devices", sum: 293 },
            { name: "Telecom", sum: 106 },
            { name: "Life Sciences", sum: 100 },
            { name: "Transportation", sum: 61 },
            { name: "Business", sum: 57 },
            { name: "Security", sum: 54 },
            { name: "Other", sum: 71 },
          ],
        },
      ],
    },
    {
      name: "Other",
      sum: 1507,
      children: [
        {
          name: "European Patent Org",
          sum: 1507,
          children: [
            { name: "Personal Devices", sum: 520 },
            { name: "Life Sciences", sum: 324 },
            { name: "Telecom", sum: 212 },
            { name: "Transportation", sum: 119 },
            { name: "Business", sum: 95 },
            { name: "Security", sum: 59 },
            { name: "Other", sum: 178 },
          ],
        },
      ],
    },
  ],
};

const Sunburst = dynamic(
  () => import("@ant-design/plots").then((mod) => mod.Sunburst),
  { ssr: false },
);

const AIPatentSunburst = () => {
  const [isDrilled, setIsDrilled] = React.useState(false);

  const config = {
    data: sunburstData,
    valueField: "sum",
    innerRadius: 0.25,
    // marginTop: 10,
    style: {
      fill: (d: any) => {
        const name = d?.data?.name || d?.name || "";
        if (REGION_COLORS[name]) return REGION_COLORS[name];

        // Conditional variety: only use field-specific colors IF drilled down
        if (isDrilled && d.depth === 3 && FIELD_COLORS[name]) {
          return FIELD_COLORS[name];
        }

        // Default regional coloring logic
        let node = d;
        while (node && node.parent) {
          const nodeName = node.data?.name || node.name;
          if (REGION_COLORS[nodeName]) {
            const regionColor = REGION_COLORS[nodeName];
            const opacity = d.depth === 2 ? "CC" : "99";
            return regionColor + opacity;
          }
          node = node.parent;
        }

        return "#CBD5E1";
      },
      fillOpacity: 1,
      stroke: "#fff",
      lineWidth: 1,
    },
    label: {
      text: (d: any) => {
        // If not drilled, hide detailed labels for small outer segments (depth 3)
        if (!isDrilled && d.depth > 2 && d.value / sunburstData.sum < 0.05) {
          return "";
        }
        // If drilled, show them as we are looking at specific detail
        return d.data?.name || d.name;
      },
      style: {
        fontSize: 10,
        fontFamily: FONT,
        fontWeight: 600,
        fill: "#000",
      },
      transform: [{ type: "overflowHide" }],
    },
    legend: {
      color: {
        position: "top" as const,
        layout: "horizontal",
        itemMarker: "circle",
        paddingBottom: 10,
      },
    },
    tooltip: {
      title: (d: any) => d?.data?.name || d?.name || "",
      style: {
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        borderRadius: "10px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        fontFamily: FONT,
      },
      items: [
        {
          field: "sum",
          name: "Patent Applications",
          valueFormatter: (v: any) => (v ? Number(v).toLocaleString() : "—"),
        },
      ],
    },
    interaction: {
      drillDown: {
        breadCrumb: {
          rootText: "Global AI Patents",
          style: {
            fontSize: 12,
            fontFamily: FONT,
            fontWeight: 400,
            dy: 14,
          },
          active: {
            fill: "#5B9BD5",
          },
        },
        fixedColor: false,
      },
    },
    onReady: (plot: any) => {
      // 1. Detect clicks that trigger a drill-down
      plot.on("click", (e: any) => {
        // If we click a segment with children, it's a drill down
        if (e.data?.data?.children) {
          setIsDrilled(true);
        }
      });

      // 2. Detect resetting to root
      // G2 plots emit a "click" on the plot itself sometimes when clicking background
      // or specifically on breadcrumbs.
      // Ant Design Plots v2 breadcrumbs usually have a "reset" behavior.
      plot.on("legend:click", () => {
        // Legend clicks don't usually change drill but good to know
      });

      // Special G2 events frequently used in drill down plots
      plot.on("drilldown", () => setIsDrilled(true));
      plot.on("drillup", (e: any) => {
        // If the current event doesn't provide a path or indicates we're at root
        if (!e.data || e.data.length <= 1) {
          setIsDrilled(false);
        }
      });

      // Manual check: If they klik on the white space or breadcrumb root
      // G2Plot v2 often provides 'breadcrumb:click' or similar.
    },
    state: {
      active: { zIndex: 2, stroke: "#000", lineWidth: 2 },
      inactive: { zIndex: 1, stroke: "#fff", fillOpacity: 0.5 },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: 650,
      }}
    >
      <Sunburst {...config} />
    </div>
  );
};

export default AIPatentSunburst;
