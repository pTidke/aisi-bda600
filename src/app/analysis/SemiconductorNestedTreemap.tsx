"use client";

import { Treemap } from "@ant-design/charts";
import { FONT } from "./constants";

// FONT is now imported from constants.ts

export default function SemiconductorNestedTreemap() {
  const treemapData = {
    name: "Global Semiconductor Supply Chain",
    children: [
      {
        name: "Design Resource",
        value: 648.0,
        children: [
          {
            name: "Logic chip design",
            value: 255.7,
            children: [{ name: "Others", value: 255.7, share_pct: 100.0 }],
          },
          {
            name: "DAO chip design",
            value: 188.7,
            children: [
              { name: "United States", value: 77.37, share_pct: 41.0 },
              { name: "Japan", value: 33.97, share_pct: 18.0 },
              { name: "Europe", value: 32.08, share_pct: 17.0 },
              { name: "China", value: 20.76, share_pct: 11.0 },
              { name: "South Korea", value: 13.21, share_pct: 7.0 },
              { name: "Taiwan", value: 7.55, share_pct: 4.0 },
              { name: "Others", value: 3.76, share_pct: 2.0 },
            ],
          },
          {
            name: "Memory chip design",
            value: 129.8,
            children: [
              { name: "South Korea", value: 77.88, share_pct: 60.0 },
              { name: "United States", value: 32.45, share_pct: 25.0 },
              { name: "Japan", value: 9.09, share_pct: 7.0 },
              { name: "China", value: 6.49, share_pct: 5.0 },
              { name: "Taiwan", value: 2.6, share_pct: 2.0 },
              { name: "Others", value: 1.3, share_pct: 1.0 },
            ],
          },
          {
            name: "Advanced CPUs",
            value: 56.2,
            children: [{ name: "Others", value: 56.2, share_pct: 100.0 }],
          },
          {
            name: "Discrete GPUs",
            value: 11.9,
            children: [{ name: "Others", value: 11.9, share_pct: 100.0 }],
          },
          {
            name: "Other Design Markets",
            value: 5.7,
            children: [{ name: "Various", value: 5.7, share_pct: 100.0 }],
          },
        ],
      },
      {
        name: "Process",
        value: 614.1,
        children: [
          {
            name: "Chip design",
            value: 574.1,
            children: [
              { name: "United States", value: 373.17, share_pct: 65.0 },
              { name: "Taiwan", value: 63.15, share_pct: 11.0 },
              { name: "Europe", value: 51.67, share_pct: 9.0 },
              { name: "China", value: 28.71, share_pct: 5.0 },
              { name: "Japan", value: 22.96, share_pct: 4.0 },
              { name: "South Korea", value: 17.22, share_pct: 3.0 },
              { name: "Others", value: 17.22, share_pct: 3.0 },
            ],
          },
          {
            name: "Fabrication materials",
            value: 40.0,
            children: [{ name: "Others", value: 40.0, share_pct: 100.0 }],
          },
        ],
      },
      {
        name: "Tool Resource",
        value: 287.7,
        children: [
          {
            name: "Lithography tools",
            value: 29.1,
            children: [
              { name: "Netherlands", value: 22.84, share_pct: 78.5 },
              { name: "Japan", value: 5.06, share_pct: 17.4 },
              { name: "Austria", value: 0.47, share_pct: 1.6 },
              { name: "Germany", value: 0.29, share_pct: 1.0 },
              { name: "United States", value: 0.23, share_pct: 0.8 },
              { name: "Others", value: 0.2, share_pct: 0.7 },
            ],
          },
          {
            name: "Etch and clean tools",
            value: 24.7,
            children: [
              { name: "United States", value: 12.33, share_pct: 49.9 },
              { name: "Japan", value: 9.31, share_pct: 37.7 },
              { name: "China", value: 2.1, share_pct: 8.5 },
              { name: "South Korea", value: 0.69, share_pct: 2.8 },
              { name: "Taiwan", value: 0.05, share_pct: 0.2 },
              { name: "Others", value: 0.22, share_pct: 0.9 },
            ],
          },
          {
            name: "Deposition tools",
            value: 24.1,
            children: [
              { name: "United States", value: 14.82, share_pct: 61.5 },
              { name: "Japan", value: 3.66, share_pct: 15.2 },
              { name: "Netherlands", value: 2.58, share_pct: 10.7 },
              { name: "China", value: 1.78, share_pct: 7.4 },
              { name: "South Korea", value: 0.77, share_pct: 3.2 },
              { name: "Others", value: 0.48, share_pct: 2.0 },
            ],
          },
          {
            name: "Dry etching and cleaning tools",
            value: 19.1,
            children: [
              { name: "United States", value: 11.06, share_pct: 57.9 },
              { name: "Japan", value: 5.46, share_pct: 28.6 },
              { name: "China", value: 1.74, share_pct: 9.1 },
              { name: "South Korea", value: 0.54, share_pct: 2.8 },
              { name: "Others", value: 0.31, share_pct: 1.6 },
            ],
          },
          {
            name: "Dry etch tools",
            value: 18.5,
            children: [
              { name: "United States", value: 10.05, share_pct: 54.3 },
              { name: "Japan", value: 5.37, share_pct: 29.0 },
              { name: "China", value: 2.22, share_pct: 12.0 },
              { name: "South Korea", value: 0.67, share_pct: 3.6 },
              { name: "Others", value: 0.2, share_pct: 1.1 },
            ],
          },
          {
            name: "Other Tool Markets",
            value: 172.2,
            children: [{ name: "Various", value: 172.2, share_pct: 100.0 }],
          },
        ],
      },
      {
        name: "Material Resource",
        value: 55.6,
        children: [
          {
            name: "ATP materials",
            value: 24.0,
            children: [{ name: "Others", value: 24.0, share_pct: 100.0 }],
          },
          {
            name: "Wafer",
            value: 10.9,
            children: [
              { name: "Japan", value: 6.1, share_pct: 56.0 },
              { name: "Taiwan", value: 1.74, share_pct: 16.0 },
              { name: "Germany", value: 1.53, share_pct: 14.0 },
              { name: "South Korea", value: 1.09, share_pct: 10.0 },
              { name: "France", value: 0.44, share_pct: 4.0 },
            ],
          },
          {
            name: "Electronic gases",
            value: 6.0,
            children: [{ name: "Others", value: 6.0, share_pct: 100.0 }],
          },
          {
            name: "Photomasks",
            value: 4.0,
            children: [
              { name: "Japan", value: 2.12, share_pct: 53.0 },
              { name: "United States", value: 1.48, share_pct: 37.0 },
              { name: "Others", value: 0.4, share_pct: 10.0 },
            ],
          },
          {
            name: "Core intellectual property",
            value: 3.9,
            children: [
              { name: "United Kingdom", value: 1.56, share_pct: 40.0 },
              { name: "United States", value: 1.21, share_pct: 31.0 },
              { name: "Japan", value: 0.51, share_pct: 13.0 },
              { name: "France", value: 0.23, share_pct: 6.0 },
              { name: "Others", value: 0.39, share_pct: 10.0 },
            ],
          },
          {
            name: "Other Material Markets",
            value: 6.8,
            children: [{ name: "Various", value: 6.8, share_pct: 100.0 }],
          },
        ],
      },
    ],
  };

  const config = {
    layout: { tile: "treemapBinary", paddingInner: 5 },
    data: treemapData,
    valueField: "value",
    style: {
      labelFill: "#000",
      lineWidth: 1,
      labelLineWidth: 1.5,
      labelFontSize: 14,
      labelFontFamily: FONT,
      labelPosition: "top-left",
      labelDx: 10,
      labelDy: 10,
    },
    tooltip: {
      title: (d: any) => {
        const titleStr =
          typeof d === "string"
            ? d
            : d?.data?.name || d?.name || d?.id || d?.path?.[1] || "";
        return titleStr.split("/").pop()?.trim() || "";
      },
      items: [
        (d: any) => ({
          name: "Market Size",
          value: `$${Number(d.value).toFixed(2)}B`,
        }),
        (d: any) => {
          let pct;
          const idStr = typeof d === "string" ? d : d?.id || d?.name || "";
          const pathSegments = idStr.split("/");

          if (pathSegments.length > 0) {
            let currentNode: any = treemapData;
            for (let i = 1; i < pathSegments.length; i++) {
              if (currentNode && currentNode.children) {
                currentNode = currentNode.children.find(
                  (c: any) => c.name === pathSegments[i],
                );
              }
            }
            if (currentNode) {
              pct = currentNode.share_pct;
            }
          }

          // Fallback if the path logic doesn't catch it
          if (pct === undefined) {
            pct =
              d.share_pct ??
              d.data?.share_pct ??
              d.data?.data?.share_pct ??
              d.origin?.share_pct;
          }

          return {
            name: "Market Share",
            value: pct !== undefined && pct !== null ? `${pct}%` : "—",
          };
        },
      ],
    },
    interaction: {
      treemapDrillDown: { breadCrumbY: 12, activeFill: "#873bf4" },
    },
  };
  return <Treemap {...config} />;
}
