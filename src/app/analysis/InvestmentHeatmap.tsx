"use client";

import React from "react";
import { Heatmap } from "@ant-design/plots";

const FONT = "'Josefin Sans', sans-serif";

const SECTOR_SHORT: Record<string, string> = {
  "Mobile, platforms & Internet services": "Mobile & Internet",
  "Healthcare and Life Sciences": "Healthcare",
  "Sales, retail, commerce, marketing": "Retail & Marketing",
  "Information Technology": "Info Tech",
  "Data and analytics": "Data & Analytics",
  Finance: "Finance",
  "Lending and Investments": "Lending",
  "Cyber Security": "Cybersecurity",
  "Energy and natural resources": "Energy",
  Manufacturing: "Manufacturing",
  "Media and Entertainment": "Media",
  "Military, public safety and government": "Military & Govt",
  "Professional services": "Prof. Services",
  Education: "Education",
  Transportation: "Transportation",
};

const rawData = [
  {
    country: "United States",
    field: "Mobile, platforms & Internet services",
    value: 168689,
  },
  {
    country: "United States",
    field: "Healthcare and Life Sciences",
    value: 85389,
  },
  { country: "United States", field: "Data and analytics", value: 84457 },
  {
    country: "United States",
    field: "Sales, retail, commerce, marketing",
    value: 72992,
  },
  { country: "United States", field: "Information Technology", value: 70668 },
  { country: "United States", field: "Finance", value: 67990 },
  { country: "United States", field: "Lending and Investments", value: 61207 },
  { country: "United States", field: "Cyber Security", value: 56694 },
  {
    country: "United States",
    field: "Energy and natural resources",
    value: 40283,
  },
  { country: "United States", field: "Manufacturing", value: 37802 },
  { country: "United States", field: "Transportation", value: 36458 },
  { country: "United States", field: "Media and Entertainment", value: 34028 },
  {
    country: "United States",
    field: "Military, public safety and government",
    value: 29524,
  },
  { country: "United States", field: "Professional services", value: 27979 },
  { country: "United States", field: "Education", value: 21207 },
  {
    country: "China",
    field: "Mobile, platforms & Internet services",
    value: 18998,
  },
  { country: "China", field: "Healthcare and Life Sciences", value: 12155 },
  { country: "China", field: "Transportation", value: 11627 },
  { country: "China", field: "Manufacturing", value: 9905 },
  {
    country: "China",
    field: "Sales, retail, commerce, marketing",
    value: 9263,
  },
  { country: "China", field: "Finance", value: 7655 },
  { country: "China", field: "Information Technology", value: 6853 },
  { country: "China", field: "Education", value: 5966 },
  { country: "China", field: "Data and analytics", value: 5447 },
  { country: "China", field: "Energy and natural resources", value: 3969 },
  { country: "China", field: "Media and Entertainment", value: 3706 },
  { country: "China", field: "Lending and Investments", value: 3333 },
  { country: "China", field: "Professional services", value: 2777 },
  { country: "China", field: "Cyber Security", value: 1752 },
  {
    country: "China",
    field: "Military, public safety and government",
    value: 1045,
  },
  {
    country: "Germany",
    field: "Mobile, platforms & Internet services",
    value: 7063,
  },
  { country: "Germany", field: "Information Technology", value: 5779 },
  { country: "Germany", field: "Manufacturing", value: 5469 },
  { country: "Germany", field: "Healthcare and Life Sciences", value: 3898 },
  { country: "Germany", field: "Transportation", value: 3832 },
  {
    country: "Germany",
    field: "Sales, retail, commerce, marketing",
    value: 3529,
  },
  { country: "Germany", field: "Data and analytics", value: 3457 },
  { country: "Germany", field: "Finance", value: 3399 },
  { country: "Germany", field: "Lending and Investments", value: 2907 },
  { country: "Germany", field: "Energy and natural resources", value: 1755 },
  { country: "Germany", field: "Professional services", value: 1702 },
  { country: "Germany", field: "Education", value: 1267 },
  { country: "Germany", field: "Cyber Security", value: 1108 },
  { country: "Germany", field: "Media and Entertainment", value: 793 },
  {
    country: "Germany",
    field: "Military, public safety and government",
    value: 370,
  },
  { country: "United Kingdom", field: "Finance", value: 8791 },
  {
    country: "United Kingdom",
    field: "Healthcare and Life Sciences",
    value: 6419,
  },
  { country: "United Kingdom", field: "Data and analytics", value: 5028 },
  {
    country: "United Kingdom",
    field: "Mobile, platforms & Internet services",
    value: 4396,
  },
  { country: "United Kingdom", field: "Information Technology", value: 3649 },
  {
    country: "United Kingdom",
    field: "Sales, retail, commerce, marketing",
    value: 3524,
  },
  { country: "United Kingdom", field: "Lending and Investments", value: 3102 },
  { country: "United Kingdom", field: "Cyber Security", value: 3064 },
  { country: "United Kingdom", field: "Transportation", value: 2746 },
  {
    country: "United Kingdom",
    field: "Energy and natural resources",
    value: 2479,
  },
  { country: "United Kingdom", field: "Professional services", value: 1892 },
  { country: "United Kingdom", field: "Manufacturing", value: 1783 },
  { country: "United Kingdom", field: "Education", value: 1511 },
  { country: "United Kingdom", field: "Media and Entertainment", value: 1131 },
  {
    country: "United Kingdom",
    field: "Military, public safety and government",
    value: 498,
  },
  {
    country: "Canada",
    field: "Mobile, platforms & Internet services",
    value: 6454,
  },
  { country: "Canada", field: "Information Technology", value: 5791 },
  { country: "Canada", field: "Healthcare and Life Sciences", value: 5073 },
  { country: "Canada", field: "Data and analytics", value: 4375 },
  {
    country: "Canada",
    field: "Sales, retail, commerce, marketing",
    value: 3590,
  },
  { country: "Canada", field: "Finance", value: 3518 },
  { country: "Canada", field: "Lending and Investments", value: 2958 },
  { country: "Canada", field: "Cyber Security", value: 2574 },
  { country: "Canada", field: "Manufacturing", value: 2441 },
  { country: "Canada", field: "Transportation", value: 2355 },
  { country: "Canada", field: "Energy and natural resources", value: 2228 },
  { country: "Canada", field: "Professional services", value: 2171 },
  { country: "Canada", field: "Education", value: 1827 },
  { country: "Canada", field: "Media and Entertainment", value: 1476 },
  {
    country: "Canada",
    field: "Military, public safety and government",
    value: 624,
  },
  { country: "Sweden", field: "Information Technology", value: 29556 },
  {
    country: "Sweden",
    field: "Mobile, platforms & Internet services",
    value: 2984,
  },
  { country: "Sweden", field: "Finance", value: 2939 },
  { country: "Sweden", field: "Lending and Investments", value: 2683 },
  { country: "Sweden", field: "Healthcare and Life Sciences", value: 2261 },
  {
    country: "Sweden",
    field: "Sales, retail, commerce, marketing",
    value: 1464,
  },
  { country: "Sweden", field: "Data and analytics", value: 1403 },
  { country: "Sweden", field: "Energy and natural resources", value: 1058 },
  { country: "Sweden", field: "Manufacturing", value: 920 },
  { country: "Sweden", field: "Cyber Security", value: 849 },
  { country: "Sweden", field: "Transportation", value: 672 },
  { country: "Sweden", field: "Professional services", value: 618 },
  { country: "Sweden", field: "Education", value: 394 },
  { country: "Sweden", field: "Media and Entertainment", value: 301 },
  {
    country: "Sweden",
    field: "Military, public safety and government",
    value: 47,
  },
  {
    country: "India",
    field: "Mobile, platforms & Internet services",
    value: 7619,
  },
  { country: "India", field: "Finance", value: 5867 },
  {
    country: "India",
    field: "Sales, retail, commerce, marketing",
    value: 5047,
  },
  { country: "India", field: "Healthcare and Life Sciences", value: 4916 },
  { country: "India", field: "Lending and Investments", value: 4694 },
  { country: "India", field: "Data and analytics", value: 3620 },
  { country: "India", field: "Information Technology", value: 3440 },
  { country: "India", field: "Education", value: 3218 },
  { country: "India", field: "Transportation", value: 2454 },
  { country: "India", field: "Energy and natural resources", value: 1638 },
  { country: "India", field: "Professional services", value: 1478 },
  { country: "India", field: "Manufacturing", value: 1404 },
  { country: "India", field: "Cyber Security", value: 1115 },
  { country: "India", field: "Media and Entertainment", value: 881 },
  {
    country: "India",
    field: "Military, public safety and government",
    value: 176,
  },
  { country: "France", field: "Healthcare and Life Sciences", value: 4439 },
  {
    country: "France",
    field: "Mobile, platforms & Internet services",
    value: 3555,
  },
  { country: "France", field: "Data and analytics", value: 2758 },
  { country: "France", field: "Information Technology", value: 2727 },
  { country: "France", field: "Finance", value: 2574 },
  {
    country: "France",
    field: "Sales, retail, commerce, marketing",
    value: 2502,
  },
  { country: "France", field: "Transportation", value: 1809 },
  { country: "France", field: "Cyber Security", value: 1808 },
  { country: "France", field: "Lending and Investments", value: 1762 },
  { country: "France", field: "Manufacturing", value: 1562 },
  { country: "France", field: "Energy and natural resources", value: 1330 },
  { country: "France", field: "Professional services", value: 1097 },
  { country: "France", field: "Education", value: 1043 },
  { country: "France", field: "Media and Entertainment", value: 775 },
  {
    country: "France",
    field: "Military, public safety and government",
    value: 452,
  },
  { country: "Israel", field: "Cyber Security", value: 7839 },
  { country: "Israel", field: "Data and analytics", value: 3381 },
  {
    country: "Israel",
    field: "Mobile, platforms & Internet services",
    value: 3015,
  },
  { country: "Israel", field: "Healthcare and Life Sciences", value: 2714 },
  {
    country: "Israel",
    field: "Sales, retail, commerce, marketing",
    value: 2696,
  },
  { country: "Israel", field: "Information Technology", value: 2432 },
  { country: "Israel", field: "Finance", value: 2162 },
  { country: "Israel", field: "Transportation", value: 2091 },
  { country: "Israel", field: "Manufacturing", value: 1192 },
  {
    country: "Israel",
    field: "Military, public safety and government",
    value: 1065,
  },
  { country: "Israel", field: "Lending and Investments", value: 917 },
  { country: "Israel", field: "Energy and natural resources", value: 549 },
  { country: "Israel", field: "Professional services", value: 421 },
  { country: "Israel", field: "Media and Entertainment", value: 293 },
  { country: "Israel", field: "Education", value: 207 },
  {
    country: "Saudi Arabia",
    field: "Mobile, platforms & Internet services",
    value: 5371,
  },
  { country: "Saudi Arabia", field: "Finance", value: 3744 },
  { country: "Saudi Arabia", field: "Lending and Investments", value: 2710 },
  {
    country: "Saudi Arabia",
    field: "Healthcare and Life Sciences",
    value: 2449,
  },
  {
    country: "Saudi Arabia",
    field: "Sales, retail, commerce, marketing",
    value: 2318,
  },
  { country: "Saudi Arabia", field: "Information Technology", value: 1736 },
  { country: "Saudi Arabia", field: "Data and analytics", value: 1605 },
  { country: "Saudi Arabia", field: "Transportation", value: 1457 },
  { country: "Saudi Arabia", field: "Education", value: 989 },
  {
    country: "Saudi Arabia",
    field: "Energy and natural resources",
    value: 906,
  },
  { country: "Saudi Arabia", field: "Cyber Security", value: 856 },
  { country: "Saudi Arabia", field: "Manufacturing", value: 637 },
  { country: "Saudi Arabia", field: "Professional services", value: 507 },
  { country: "Saudi Arabia", field: "Media and Entertainment", value: 263 },
  {
    country: "Saudi Arabia",
    field: "Military, public safety and government",
    value: 47,
  },
];

// Shorten field names + add log-normalized value for color/size
// Normalize to 0-100 using sqrt scale
const MAX_VAL = 168689;
const heatmapData = rawData.map((d) => ({
  country: d.country,
  field: SECTOR_SHORT[d.field] || d.field,
  value: d.value,
  normalized: Math.round((Math.sqrt(d.value) / Math.sqrt(MAX_VAL)) * 100),
}));

const InvestmentHeatmap = () => {
  const config = {
    data: heatmapData,
    xField: "field",
    yField: "country",
    colorField: "normalized",
    sizeField: "normalized",
    shapeField: "point",
    scale: {
      size: { range: [12, 24] },
      color: {
        domain: [0, 25, 50, 75, 100],
        range: ["#BFDBFE", "#60A5FA", "#3B82F6", "#1D4ED8", "#1E3A8A"],
      },
    },
    label: {
      text: (d: any) => {
        if (d.value >= 10000) return `$${(d.value / 1000).toFixed(0)}B`;
        if (d.value >= 1000) return `$${(d.value / 1000).toFixed(1)}B`;
        return `$${d.value}M`;
      },
      position: "inside",
      style: {
        fill: "#fff",
        fontSize: 9,
        fontFamily: FONT,
        fontWeight: 600,
        pointerEvents: "none",
      },
    },
    axis: {
      x: {
        title: null,
        labelAutoRotate: true,
        labelFontSize: 11,
        labelFontFamily: FONT,
      },
      y: {
        title: null,
        labelFontSize: 12,
        labelFontFamily: FONT,
        labelFontWeight: 600,
      },
    },
    tooltip: {
      title: (d: any) => `${d.country} · ${d.field}`,
      items: [
        {
          field: "value",
          name: "Investment",
          valueFormatter: (v: any) => {
            const num = Number(v);
            if (num >= 1000) return `$${(num / 1000).toFixed(1)}B`;
            return `$${num}M`;
          },
        },
      ],
    },
    animation: {
      appear: {
        animation: "fade-in",
        duration: 800,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: 600 }}>
      <Heatmap {...config} />
    </div>
  );
};

export default InvestmentHeatmap;
