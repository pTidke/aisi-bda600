"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

const FONT = "'Josefin Sans', sans-serif";

const COUNTRIES = [
  {
    name: "United States",
    code: "US",
    score: 79.4,
    rank: 1,
    cov: 1,
    dims: 7,
    lat: 38.9,
    lng: -97,
    sub: "Full-spectrum leader",
    ch: "+1.2",
    d: [56.2, 96.2, 81.2, 73.3, 100, 100, 82.7],
    str: [
      "Broadest collaboration network",
      "Dominant hardware position",
      "Only country with Tier-1 workforce data",
    ],
    wk: [
      "Governance framework still evolving",
      "HQ-attribution inflates some metrics",
    ],
    collab: [
      {
        c: "China",
        v: 197000,
      },
      {
        c: "United Kingdom",
        v: 52000,
      },
      {
        c: "Germany",
        v: 38000,
      },
      {
        c: "Canada",
        v: 35000,
      },
      {
        c: "India",
        v: 31000,
      },
    ],
  },
  {
    name: "China",
    code: "CN",
    score: 61.8,
    rank: 2,
    cov: 1,
    dims: 7,
    lat: 35.9,
    lng: 104.2,
    sub: "Research powerhouse",
    ch: "+2.4",
    d: [55.3, 100, 65.1, 46.4, 99.3, 38.8, 44.7],
    str: [
      "Highest innovation output",
      "Top patent filer globally",
      "Massive investment volume",
    ],
    wk: [
      "Workforce data unreliable (LinkedIn blocked)",
      "Chip design collaboration declining",
      "Limited governance coverage in AGORA",
    ],
    collab: [
      {
        c: "United States",
        v: 197000,
      },
      {
        c: "United Kingdom",
        v: 28000,
      },
      {
        c: "Australia",
        v: 22000,
      },
      {
        c: "Canada",
        v: 18000,
      },
      {
        c: "Germany",
        v: 17000,
      },
    ],
  },
  {
    name: "South Korea",
    code: "KR",
    score: 57.2,
    rank: 3,
    cov: 0.9,
    dims: 6,
    lat: 35.9,
    lng: 127.8,
    sub: "Innovation leader",
    ch: "+1.1",
    d: [49.7, 92.2, 57.7, 40.4, 75.7, 80, 0],
    str: [
      "Near-top patent score",
      "Strong corporate AI ecosystem",
      "Samsung/SK Hynix semiconductor presence",
    ],
    wk: [
      "No governance data",
      "Narrow collaboration focus",
      "Hardware breadth limited vs Japan",
    ],
    collab: [
      {
        c: "United States",
        v: 14000,
      },
      {
        c: "China",
        v: 12000,
      },
      {
        c: "Japan",
        v: 8000,
      },
      {
        c: "United Kingdom",
        v: 4000,
      },
      {
        c: "Germany",
        v: 3000,
      },
    ],
  },
  {
    name: "Japan",
    code: "JP",
    score: 53.2,
    rank: 4,
    cov: 0.9,
    dims: 6,
    lat: 36.2,
    lng: 138.3,
    sub: "Hardware stronghold",
    ch: "+0.8",
    d: [39.9, 90.9, 52.9, 68.7, 77.5, 0, 0],
    str: [
      "Second-broadest semiconductor presence",
      "Strong patent diversity",
      "Deep in fabrication tools",
    ],
    wk: [
      "No governance data",
      "Moderate collaboration reach",
      "Research growth lagging",
    ],
    collab: [
      {
        c: "China",
        v: 25000,
      },
      {
        c: "United States",
        v: 22000,
      },
      {
        c: "South Korea",
        v: 8000,
      },
      {
        c: "United Kingdom",
        v: 6000,
      },
      {
        c: "Germany",
        v: 5000,
      },
    ],
  },
  {
    name: "Singapore",
    code: "SG",
    score: 52.5,
    rank: 5,
    cov: 0.8,
    dims: 5,
    lat: 1.4,
    lng: 103.8,
    sub: "Punches above weight",
    ch: "+1.8",
    d: [58.3, 77.7, 68.6, 48.8, 64.9, 0, 0],
    str: [
      "Highest commercial score outside top-3",
      "Strong semiconductor niche",
      "High research per capita",
    ],
    wk: [
      "No talent data in PARAT",
      "HQ-attribution may inflate scores",
      "Small collaboration network",
    ],
    collab: [
      {
        c: "China",
        v: 8000,
      },
      {
        c: "United States",
        v: 6000,
      },
      {
        c: "India",
        v: 3000,
      },
      {
        c: "United Kingdom",
        v: 2500,
      },
      {
        c: "Australia",
        v: 2000,
      },
    ],
  },
  {
    name: "Germany",
    code: "DE",
    score: 52.3,
    rank: 6,
    cov: 0.9,
    dims: 6,
    lat: 51.2,
    lng: 10.4,
    sub: "Collaboration hub",
    ch: "+0.6",
    d: [49.6, 84.5, 54.7, 45.7, 93.5, 27.3, 0],
    str: [
      "Top-3 collaboration score",
      "Broad patent portfolio",
      "Strong equipment makers (ZEISS, Trumpf)",
    ],
    wk: [
      "No governance data",
      "Mid-tier investment volume",
      "Research output below UK",
    ],
    collab: [
      {
        c: "United States",
        v: 38000,
      },
      {
        c: "China",
        v: 17000,
      },
      {
        c: "United Kingdom",
        v: 15000,
      },
      {
        c: "France",
        v: 10000,
      },
      {
        c: "Italy",
        v: 8000,
      },
    ],
  },
  {
    name: "United Kingdom",
    code: "GB",
    score: 48.4,
    rank: 7,
    cov: 0.9,
    dims: 6,
    lat: 55.4,
    lng: -3.4,
    sub: "Ethics & safety focus",
    ch: "-0.5",
    d: [54.7, 82.1, 49.7, 19.3, 95.6, 56.5, 0],
    str: [
      "Second-highest collaboration score",
      "Strong AI safety research",
      "Deep talent pool",
    ],
    wk: [
      "Minimal hardware sovereignty",
      "No governance data",
      "Investment trails US/China significantly",
    ],
    collab: [
      {
        c: "United States",
        v: 52000,
      },
      {
        c: "China",
        v: 28000,
      },
      {
        c: "Germany",
        v: 15000,
      },
      {
        c: "France",
        v: 11000,
      },
      {
        c: "India",
        v: 10000,
      },
    ],
  },
  {
    name: "Netherlands",
    code: "NL",
    score: 43.6,
    rank: 8,
    cov: 0.9,
    dims: 6,
    lat: 52.1,
    lng: 5.3,
    sub: "EUV monopoly",
    ch: "+0.4",
    d: [46.9, 59.3, 42.9, 50.6, 72.7, 4.8, 0],
    str: [
      "ASML: 100% EUV lithography monopoly",
      "Strong niche hardware position",
      "Good collaboration breadth",
    ],
    wk: [
      "Narrow commercial ecosystem",
      "Mid-range research output",
      "Concentrated in single chokepoint",
    ],
    collab: [
      {
        c: "United States",
        v: 8000,
      },
      {
        c: "Germany",
        v: 7000,
      },
      {
        c: "China",
        v: 6000,
      },
      {
        c: "United Kingdom",
        v: 5000,
      },
      {
        c: "Belgium",
        v: 3000,
      },
    ],
  },
  {
    name: "India",
    code: "IN",
    score: 41.5,
    rank: 9,
    cov: 0.6,
    dims: 4,
    lat: 20.6,
    lng: 79,
    sub: "Rising research giant",
    ch: "+3.1",
    d: [47.5, 79, 78.6, 0, 89.6, 0, 0],
    str: [
      "Fastest-growing publication output",
      "High commercial investment",
      "Broad collaboration network",
    ],
    wk: [
      "Zero hardware sovereignty",
      "No PARAT talent data",
      "No governance data",
    ],
    collab: [
      {
        c: "United States",
        v: 31000,
      },
      {
        c: "China",
        v: 15000,
      },
      {
        c: "United Kingdom",
        v: 10000,
      },
      {
        c: "Australia",
        v: 6000,
      },
      {
        c: "South Korea",
        v: 5000,
      },
    ],
  },
  {
    name: "Austria",
    code: "AT",
    score: 41.3,
    rank: 10,
    cov: 0.8,
    dims: 5,
    lat: 47.5,
    lng: 14.6,
    sub: "Niche hardware player",
    ch: "+0.3",
    d: [41.9, 63.4, 54.6, 37.9, 61, 0, 0],
    str: [
      "Solid semiconductor niche",
      "Strong patent diversity",
      "Balanced profile",
    ],
    wk: ["Small collaboration reach", "No talent data", "Mid-tier overall"],
    collab: [
      {
        c: "Germany",
        v: 4000,
      },
      {
        c: "United States",
        v: 2000,
      },
      {
        c: "United Kingdom",
        v: 1500,
      },
      {
        c: "Italy",
        v: 1200,
      },
      {
        c: "Switzerland",
        v: 1000,
      },
    ],
  },
  {
    name: "Canada",
    code: "CA",
    score: 41.3,
    rank: 11,
    cov: 0.7,
    dims: 5,
    lat: 56.1,
    lng: -106.3,
    sub: "Open AI research",
    ch: "+0.5",
    d: [49.8, 84.4, 41.2, 0, 89, 60, 0],
    str: [
      "Top-5 collaboration score",
      "Strong patent diversity",
      "AI research pioneers (Bengio, Hinton)",
    ],
    wk: [
      "Zero hardware sovereignty",
      "Very low talent score",
      "Commercial ecosystem underdeveloped",
    ],
    collab: [
      {
        c: "United States",
        v: 35000,
      },
      {
        c: "China",
        v: 18000,
      },
      {
        c: "United Kingdom",
        v: 9000,
      },
      {
        c: "France",
        v: 5000,
      },
      {
        c: "Germany",
        v: 4500,
      },
    ],
  },
  {
    name: "Australia",
    code: "AU",
    score: 41.1,
    rank: 12,
    cov: 0.6,
    dims: 4,
    lat: -25.3,
    lng: 133.8,
    sub: "Research breadth",
    ch: "+0.7",
    d: [54.5, 83.5, 66.9, 0, 85.9, 0, 0],
    str: [
      "Strong patent diversity",
      "Good commercial ecosystem",
      "Broad collaborator",
    ],
    wk: ["Zero hardware presence", "No talent data", "No governance coverage"],
    collab: [
      {
        c: "China",
        v: 22000,
      },
      {
        c: "United States",
        v: 18000,
      },
      {
        c: "United Kingdom",
        v: 8000,
      },
      {
        c: "India",
        v: 6000,
      },
      {
        c: "South Korea",
        v: 4000,
      },
    ],
  },
  {
    name: "Sweden",
    code: "SE",
    score: 39.8,
    rank: 13,
    cov: 1,
    dims: 6,
    lat: 60.1,
    lng: 18.6,
    sub: "Nordic innovator",
    ch: "+0.4",
    d: [44.9, 70.7, 41.8, 16.7, 66.7, 43.2, 0],
    str: [
      "Has PARAT talent data",
      "Solid patent diversity",
      "Good collaboration reach",
    ],
    wk: [
      "Small hardware footprint",
      "Mid-tier investment",
      "No governance data",
    ],
    collab: [
      {
        c: "United States",
        v: 6000,
      },
      {
        c: "United Kingdom",
        v: 4000,
      },
      {
        c: "Germany",
        v: 3500,
      },
      {
        c: "China",
        v: 3000,
      },
      {
        c: "France",
        v: 2000,
      },
    ],
  },
  {
    name: "Taiwan",
    code: "TW",
    score: 38.6,
    rank: 14,
    cov: 1,
    dims: 6,
    lat: 23.7,
    lng: 121,
    sub: "Foundry titan",
    ch: "+0.9",
    d: [42.8, 82.1, 28.9, 22.9, 62.8, 30.4, 0],
    str: [
      "TSMC dominates advanced logic fab",
      "Strong patent portfolio",
      "Critical supply chain node",
    ],
    wk: [
      "Low commercial investment score",
      "Limited collaboration network",
      "Hardware score understates physical capacity",
    ],
    collab: [
      {
        c: "United States",
        v: 8000,
      },
      {
        c: "China",
        v: 6000,
      },
      {
        c: "Japan",
        v: 3000,
      },
      {
        c: "South Korea",
        v: 2500,
      },
      {
        c: "United Kingdom",
        v: 1500,
      },
    ],
  },
  {
    name: "Finland",
    code: "FI",
    score: 37.9,
    rank: 15,
    cov: 0.7,
    dims: 5,
    lat: 61.9,
    lng: 25.7,
    sub: "Nokia legacy",
    ch: "+0.2",
    d: [44.4, 67.5, 46.4, 0, 60.1, 66.5, 0],
    str: [
      "Has PARAT talent data",
      "Good research quality",
      "Solid IP portfolio",
    ],
    wk: ["Zero hardware", "Small market size", "Limited collaboration reach"],
    collab: [
      {
        c: "United States",
        v: 3000,
      },
      {
        c: "China",
        v: 2500,
      },
      {
        c: "United Kingdom",
        v: 2000,
      },
      {
        c: "Germany",
        v: 1800,
      },
      {
        c: "Sweden",
        v: 1500,
      },
    ],
  },
  {
    name: "Spain",
    code: "ES",
    score: 36.8,
    rank: 16,
    cov: 0.6,
    dims: 4,
    lat: 40.5,
    lng: -3.7,
    sub: "Growing output",
    ch: "+0.6",
    d: [44, 76.9, 61.5, 0, 83.8, 0, 0],
    str: [
      "Strong patent diversity",
      "Good commercial investment",
      "Broad collaboration",
    ],
    wk: ["Zero hardware sovereignty", "No talent data", "No governance data"],
    collab: [
      {
        c: "United States",
        v: 6000,
      },
      {
        c: "United Kingdom",
        v: 5000,
      },
      {
        c: "China",
        v: 4500,
      },
      {
        c: "France",
        v: 4000,
      },
      {
        c: "Germany",
        v: 3500,
      },
    ],
  },
  {
    name: "Italy",
    code: "IT",
    score: 36.5,
    rank: 17,
    cov: 0.9,
    dims: 5,
    lat: 41.9,
    lng: 12.6,
    sub: "European breadth",
    ch: "+0.3",
    d: [46.4, 73.9, 54.3, 3.9, 85.4, 0, 0],
    str: [
      "Strong collaboration network",
      "Good patent breadth",
      "Growing commercial ecosystem",
    ],
    wk: ["Minimal hardware presence", "No talent data", "No governance data"],
    collab: [
      {
        c: "United States",
        v: 8000,
      },
      {
        c: "China",
        v: 7000,
      },
      {
        c: "Germany",
        v: 8000,
      },
      {
        c: "United Kingdom",
        v: 6000,
      },
      {
        c: "France",
        v: 6000,
      },
    ],
  },
  {
    name: "Switzerland",
    code: "CH",
    score: 35.1,
    rank: 18,
    cov: 1,
    dims: 6,
    lat: 46.8,
    lng: 8.2,
    sub: "Precision AI",
    ch: "+0.1",
    d: [52.8, 59.3, 42.6, 4.8, 71, 23.7, 0],
    str: ["High research quality", "Strong talent pool", "Good IP diversity"],
    wk: ["Minimal hardware", "Mid-tier commercial", "Small market"],
    collab: [
      {
        c: "Germany",
        v: 6000,
      },
      {
        c: "United States",
        v: 5000,
      },
      {
        c: "United Kingdom",
        v: 4000,
      },
      {
        c: "France",
        v: 3000,
      },
      {
        c: "Italy",
        v: 2500,
      },
    ],
  },
  {
    name: "Brazil",
    code: "BR",
    score: 34.7,
    rank: 19,
    cov: 0.6,
    dims: 4,
    lat: -14.2,
    lng: -51.9,
    sub: "Emerging contender",
    ch: "+2.0",
    d: [36.4, 78.4, 63.8, 0, 58.4, 0, 0],
    str: [
      "Strong patent diversity",
      "Growing investment",
      "Largest Latin American AI output",
    ],
    wk: ["Zero hardware", "No talent data", "Limited collaboration breadth"],
    collab: [
      {
        c: "United States",
        v: 5000,
      },
      {
        c: "China",
        v: 4000,
      },
      {
        c: "United Kingdom",
        v: 2500,
      },
      {
        c: "France",
        v: 2000,
      },
      {
        c: "Germany",
        v: 1800,
      },
    ],
  },
  {
    name: "France",
    code: "FR",
    score: 34.5,
    rank: 20,
    cov: 1,
    dims: 6,
    lat: 46.2,
    lng: 2.2,
    sub: "Balanced European power",
    ch: "+0.2",
    d: [44, 79.2, 41.6, 2.7, 88.7, 3.7, 0],
    str: [
      "Top-tier collaboration",
      "Good patent breadth",
      "Has PARAT talent data",
    ],
    wk: [
      "Minimal hardware sovereignty",
      "Investment trails peers",
      "Governance score zero",
    ],
    collab: [
      {
        c: "United States",
        v: 18000,
      },
      {
        c: "China",
        v: 12000,
      },
      {
        c: "United Kingdom",
        v: 11000,
      },
      {
        c: "Germany",
        v: 10000,
      },
      {
        c: "Italy",
        v: 6000,
      },
    ],
  },
];

const DIM_LABELS = [
  "Research",
  "Innovation",
  "Commercial",
  "Hardware",
  "Collaboration",
  "Talent",
  "Governance",
];
const DIM_COLORS = [
  "#2563EB",
  "#D97706",
  "#059669",
  "#DC2626",
  "#7C3AED",
  "#DB2777",
  "#0D9488",
];

const TOP_ARCS = [
  { f: "US", t: "CN", v: 197000 },
  { f: "US", t: "GB", v: 52000 },
  { f: "US", t: "DE", v: 38000 },
  { f: "US", t: "CA", v: 35000 },
  { f: "US", t: "IN", v: 31000 },
  { f: "US", t: "JP", v: 22000 },
  { f: "US", t: "FR", v: 18000 },
  { f: "US", t: "KR", v: 14000 },
  { f: "US", t: "AU", v: 18000 },
  { f: "CN", t: "GB", v: 28000 },
  { f: "CN", t: "AU", v: 22000 },
  { f: "CN", t: "JP", v: 25000 },
  { f: "CN", t: "CA", v: 18000 },
  { f: "CN", t: "DE", v: 17000 },
  { f: "CN", t: "IN", v: 15000 },
  { f: "CN", t: "KR", v: 12000 },
  { f: "CN", t: "SG", v: 8000 },
  { f: "CN", t: "FR", v: 12000 },
  { f: "GB", t: "DE", v: 15000 },
  { f: "GB", t: "FR", v: 11000 },
  { f: "GB", t: "IN", v: 10000 },
  { f: "GB", t: "AU", v: 8000 },
  { f: "GB", t: "CA", v: 9000 },
  { f: "DE", t: "FR", v: 10000 },
  { f: "DE", t: "IT", v: 8000 },
  { f: "JP", t: "KR", v: 8000 },
  { f: "IN", t: "AU", v: 6000 },
  { f: "SE", t: "US", v: 6000 },
  { f: "IT", t: "US", v: 8000 },
  { f: "BR", t: "US", v: 5000 },
];

// const latLngTo3D = (lat: number, lng: number, r: number) => {
//   const phi = ((90 - lat) * Math.PI) / 180;
//   const theta = ((lng + 180) * Math.PI) / 180;
//   return new THREE.Vector3(
//     -r * Math.sin(phi) * Math.cos(theta),
//     r * Math.cos(phi),
//     r * Math.sin(phi) * Math.sin(theta),
//   );
// };

const RadarChart = ({
  dims,
  size = 200,
}: {
  dims: number[];
  size?: number;
}) => {
  const cx = size / 2,
    cy = size / 2,
    r = size * 0.38;
  const angles = Array.from(
    { length: 7 },
    (_, i) => (Math.PI * 2 * i) / 7 - Math.PI / 2,
  );
  const pointAt = (a: number, v: number) => [
    cx + r * (v / 100) * Math.cos(a),
    cy + r * (v / 100) * Math.sin(a),
  ];
  const polygon = dims
    .map((v, i) => pointAt(angles[i], v ?? 0).join(","))
    .join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[25, 50, 75, 100].map((lv) => (
        <polygon
          key={lv}
          points={angles.map((a) => pointAt(a, lv).join(",")).join(" ")}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={lv === 100 ? 1 : 0.5}
        />
      ))}
      {angles.map((a, i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy}
            x2={cx + r * Math.cos(a)}
            y2={cy + r * Math.sin(a)}
            stroke="#E2E8F0"
            strokeWidth={0.5}
          />
          <text
            x={cx + (r + 14) * Math.cos(a)}
            y={cy + (r + 14) * Math.sin(a)}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: 9,
              fill: "#64748B",
              fontFamily: FONT,
              fontWeight: 600,
            }}
          >
            {DIM_LABELS[i]}
          </text>
        </g>
      ))}
      <polygon
        points={polygon}
        fill="rgba(37,99,235,0.15)"
        stroke="#2563EB"
        strokeWidth={1.5}
      />
      {dims.map((v, i) =>
        v > 0 ? (
          <circle
            key={i}
            cx={pointAt(angles[i], v)[0]}
            cy={pointAt(angles[i], v)[1]}
            r={3}
            fill={DIM_COLORS[i]}
            stroke="#fff"
            strokeWidth={1}
          />
        ) : null,
      )}
    </svg>
  );
};

/* ——— 3D GLOBE ——— */

interface GlobeProps {
  countries: typeof COUNTRIES;
  arcs: typeof TOP_ARCS;
  selectedCode: string;
  onSelect: (code: string) => void;
  showDense: boolean;
}

// Helper: Convert Lat/Lng to 3D spherical coordinates
const latLngTo3D = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

const Globe = ({
  countries,
  arcs,
  selectedCode,
  onSelect,
  showDense,
}: GlobeProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ isDown: false, x: 0, y: 0 });
  const rotRef = useRef({ x: 0.3, y: 0, autoRotate: true });

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth,
      H = el.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const pivot = new THREE.Group();
    scene.add(pivot);

    // 1. LIGHTING
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // scene.add(ambientLight);
    // const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // dirLight.position.set(5, 3, 5);
    // scene.add(dirLight);

    // 2. GLOBE CORE — warm white
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0xf5f2eb,
    });
    pivot.add(new THREE.Mesh(globeGeo, globeMat));

    // 3. ATMOSPHERE GLOW — very subtle blue halo
    const atmosGeo = new THREE.SphereGeometry(1.08, 64, 64);
    const atmosMat = new THREE.MeshPhongMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    });
    pivot.add(new THREE.Mesh(atmosGeo, atmosMat));

    // 4. GEOJSON VECTOR BORDERS — dark red lines
    const bordersGroup = new THREE.Group();
    pivot.add(bordersGroup);

    fetch("/world-borders.json")
      .then((res) => res.json())
      .then((data) => {
        data.features.forEach((feature: any) => {
          const { geometry } = feature;
          if (!geometry) return;

          const iso2 = feature.properties.iso_a2;
          const isSelected = iso2 === selectedCode;

          // Selected country → blue highlight, others → dark red
          const lineMat = new THREE.LineBasicMaterial({
            color: isSelected ? 0xdc2626 : 0x2563eb,
            transparent: true,
            opacity: isSelected ? 1.0 : 0.45,
          });

          // Handle both Polygon and MultiPolygon
          const coordinates =
            geometry.type === "MultiPolygon"
              ? geometry.coordinates
              : [geometry.coordinates];

          coordinates.forEach((polygon: any) => {
            const boundary = polygon[0];
            const points: THREE.Vector3[] = boundary.map(
              ([lng, lat]: [number, number]) => latLngTo3D(lat, lng, 1.002),
            );
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            bordersGroup.add(new THREE.Line(lineGeo, lineMat));

            // Glow layers — only for selected country
            if (isSelected) {
              [1.0035, 1.005].forEach((r, i) => {
                const glowPoints = boundary.map(
                  ([lng, lat]: [number, number]) => latLngTo3D(lat, lng, r),
                );
                const glowGeo = new THREE.BufferGeometry().setFromPoints(
                  glowPoints,
                );
                const glowMat = new THREE.LineBasicMaterial({
                  color: 0xdc2626,
                  transparent: true,
                  opacity: 0.3 - i * 0.12, // 0.3 → 0.18, fades outward
                });
                bordersGroup.add(new THREE.Line(glowGeo, glowMat));
              });
            }
          });
        });
      })
      .catch((err) => console.error("Error loading GeoJSON:", err));

    // 5. DATA DOTS
    const dotGroup = new THREE.Group();
    countries.forEach((c) => {
      const pos = latLngTo3D(c.lat, c.lng, 1.015);
      const dotGeo = new THREE.SphereGeometry(0.018, 8, 8);
      const isSel = c.code === selectedCode;
      const dotMat = new THREE.MeshBasicMaterial({
        color: isSel ? 0x2563eb : c.score > 50 ? 0xdc2626 : 0x475569,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      dot.userData = { code: c.code };
      dotGroup.add(dot);
    });
    pivot.add(dotGroup);

    // 6. DATA ARCS
    const arcGroup = new THREE.Group();
    const codeMap: Record<string, (typeof COUNTRIES)[0]> = {};
    countries.forEach((c) => {
      codeMap[c.code] = c;
    });

    const arcData = showDense ? arcs : arcs.filter((a) => a.v > 8000);
    arcData.forEach((a) => {
      const c1 = codeMap[a.f],
        c2 = codeMap[a.t];
      if (!c1 || !c2) return;
      const start = latLngTo3D(c1.lat, c1.lng, 1.015);
      const end = latLngTo3D(c2.lat, c2.lng, 1.015);
      const mid = start.clone().add(end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(1.015 + dist * 0.25);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(32);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const intensity = Math.min(a.v / 50000, 1);
      const isSel = a.f === selectedCode || a.t === selectedCode;
      const lineMat = new THREE.LineBasicMaterial({
        color: isSel ? 0x2563eb : 0xd97706,
        transparent: true,
        opacity: isSel ? 0.8 : 0.08 + intensity * 0.35,
      });
      arcGroup.add(new THREE.Line(lineGeo, lineMat));
    });
    pivot.add(arcGroup);

    // 7. ANIMATION & CONTROLS
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (rotRef.current.autoRotate) rotRef.current.y += 0.002;
      pivot.rotation.x = rotRef.current.x;
      pivot.rotation.y = rotRef.current.y;
      renderer.render(scene, camera);
    };
    animate();

    const onDown = (e: MouseEvent) => {
      mouseRef.current = { isDown: true, x: e.clientX, y: e.clientY };
      rotRef.current.autoRotate = false;
    };
    const onMove = (e: MouseEvent) => {
      if (!mouseRef.current.isDown) return;
      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;
      rotRef.current.y += dx * 0.005;
      rotRef.current.x += dy * 0.005;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onUp = () => {
      mouseRef.current.isDown = false;
      setTimeout(() => {
        rotRef.current.autoRotate = true;
      }, 3000);
    };
    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / W) * 2 - 1,
        -((e.clientY - rect.top) / H) * 2 + 1,
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(dotGroup.children);
      if (intersects.length > 0) onSelect(intersects[0].object.userData.code);
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("click", onClick);
      renderer.dispose();
      globeGeo.dispose();
      // globeMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [countries, arcs, selectedCode, onSelect, showDense]);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
    />
  );
};

// export default Globe;

/* ─── MAIN ─── */
export default function AISIDashboard() {
  const [selected, setSelected] = useState("US");
  const [showDense, setShowDense] = useState(false);

  const country = useMemo(
    () => COUNTRIES.find((c) => c.code === selected) || COUNTRIES[0],
    [selected],
  );
  const globalAvg = useMemo(
    () =>
      (COUNTRIES.reduce((s, c) => s + c.score, 0) / COUNTRIES.length).toFixed(
        1,
      ),
    [],
  );
  const risingStar = useMemo(
    () =>
      COUNTRIES.reduce(
        (best, c) => (parseFloat(c.ch) > parseFloat(best.ch) ? c : best),
        COUNTRIES[0],
      ),
    [],
  );

  // Shared card style — individual floating cards
  const card: React.CSSProperties = {
    background: "#fff",
    borderRadius: 14,
    border: "1px solid #ECEAE3",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  return (
    <div
      style={{
        fontFamily: FONT,
        color: "#1E293B",
        // background: "#F4F2EC",
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "28px 32px" }}>
        {/* ── 4 STAT CARDS ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
            marginBottom: 20,
          }}
        >
          {[
            {
              label: "Global AISI avg",
              val: globalAvg,
              accent: "#059669",
              sub: `${COUNTRIES.length} countries`,
            },
            {
              label: "Top performer",
              val: "USA",
              accent: "#2563EB",
              sub: "Score: 77.6",
            },
            {
              label: "Rising star",
              val: risingStar.name.split(" ")[0],
              accent: "#D97706",
              sub: `${risingStar.ch} trend`,
            },
            {
              label: "Data points",
              val: "50K+",
              accent: "#7C3AED",
              sub: "31 source files",
            },
          ].map((s, i) => (
            <div key={i} style={{ ...card, padding: "18px 22px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#94A3B8",
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: s.accent,
                  marginTop: 6,
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── MAIN 2-COL: 3fr | 1fr ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 14,
            alignItems: "start",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Globe card */}
            <div style={{ ...card, overflow: "hidden", position: "relative" }}>
              <div style={{ height: 520 }}>
                <Globe
                  countries={COUNTRIES}
                  arcs={TOP_ARCS}
                  selectedCode={selected}
                  onSelect={setSelected}
                  showDense={showDense}
                />
              </div>

              {/* Selected country pill — top left */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: 12,
                  padding: "12px 16px",
                  border: "1px solid #ECEAE3",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#94A3B8",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {country.name}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#2563EB",
                    lineHeight: 1.1,
                  }}
                >
                  AISI: #{country.rank}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    marginTop: 4,
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700 }}>
                    {country.score}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: parseFloat(country.ch) > 0 ? "#059669" : "#DC2626",
                      fontWeight: 600,
                    }}
                  >
                    {country.ch}
                  </span>
                </div>
                <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 2 }}>
                  {country.sub}
                </div>
              </div>

              {/* Arc density — top right */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: 10,
                  padding: "8px 12px",
                  border: "1px solid #ECEAE3",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#94A3B8",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 7,
                  }}
                >
                  Arc Density
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  {[false, true].map((dense) => (
                    <button
                      key={String(dense)}
                      onClick={() => setShowDense(dense)}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 7,
                        border: "1px solid #ECEAE3",
                        cursor: "pointer",
                        background: showDense === dense ? "#2563EB" : "#fff",
                        color: showDense === dense ? "#fff" : "#475569",
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: FONT,
                        transition: "all 0.15s",
                      }}
                    >
                      {dense ? "All" : "Top"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Legend — bottom left */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  background: "rgba(255,255,255,0.92)",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: 10,
                  color: "#94A3B8",
                  display: "flex",
                  gap: 14,
                  border: "1px solid #ECEAE3",
                }}
              >
                <span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#DC2626",
                      marginRight: 5,
                    }}
                  />
                  Score &gt;50
                </span>
                <span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#475569",
                      marginRight: 5,
                    }}
                  />
                  Score ≤50
                </span>
                <span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 14,
                      height: 2,
                      background: "#D97706",
                      marginRight: 5,
                      verticalAlign: "middle",
                    }}
                  />
                  Collaboration
                </span>
              </div>
            </div>

            {/* Radar + Dimension scores — side by side, exact width of globe */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {/* Radar */}
              <div style={{ ...card, padding: "20px 22px" }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#94A3B8",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  AISI Radar — {country.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "4px 0 8px",
                  }}
                >
                  <RadarChart dims={country.d} size={220} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 4,
                    marginTop: 2,
                  }}
                >
                  {DIM_LABELS.map((dim, i) => (
                    <span
                      key={dim}
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        color: DIM_COLORS[i],
                        background: DIM_COLORS[i] + "14",
                        padding: "2px 7px",
                        borderRadius: 6,
                      }}
                    >
                      {dim}:{" "}
                      {country.d[i] != null ? country.d[i].toFixed(0) : "—"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dimension scores */}
              <div style={{ ...card, padding: "20px 22px" }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#94A3B8",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 18,
                  }}
                >
                  Dimension Scores — {country.name}
                </div>
                {DIM_LABELS.map((dim, i) => (
                  <div key={dim} style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 11,
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ color: "#475569", fontWeight: 500 }}>
                        {dim}
                      </span>
                      <span style={{ fontWeight: 700, color: DIM_COLORS[i] }}>
                        {country.d[i] != null ? country.d[i].toFixed(0) : "—"}
                      </span>
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#F1F5F9",
                        borderRadius: 3,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${country.d[i] ?? 0}%`,
                          background: DIM_COLORS[i],
                          borderRadius: 3,
                          transition: "width 0.4s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Country Profile */}
            <div style={{ ...card, padding: "26px 30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 22,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#94A3B8",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Country Profile
                  </div>
                  <h2
                    style={{ margin: "5px 0 0", fontSize: 26, fontWeight: 700 }}
                  >
                    {country.name}
                  </h2>
                  <div style={{ fontSize: 13, color: "#64748B", marginTop: 3 }}>
                    {country.sub} · Rank #{country.rank} · Coverage:{" "}
                    {(country.cov * 100).toFixed(0)}% · {country.dims}/7
                    dimensions
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 44,
                      fontWeight: 700,
                      color: "#2563EB",
                      lineHeight: 1,
                    }}
                  >
                    {country.score}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: parseFloat(country.ch) > 0 ? "#059669" : "#DC2626",
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {country.ch} trend
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 1fr",
                  gap: 28,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <RadarChart dims={country.d} size={200} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#059669",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      marginBottom: 10,
                    }}
                  >
                    Strengths
                  </div>
                  {country.str.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        marginBottom: 7,
                        fontSize: 13,
                        color: "#475569",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "#059669",
                          flexShrink: 0,
                          fontWeight: 700,
                        }}
                      >
                        +
                      </span>
                      {s}
                    </div>
                  ))}
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#DC2626",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      marginTop: 16,
                      marginBottom: 10,
                    }}
                  >
                    Weaknesses
                  </div>
                  {country.wk.map((w, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        marginBottom: 7,
                        fontSize: 13,
                        color: "#475569",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "#DC2626",
                          flexShrink: 0,
                          fontWeight: 700,
                        }}
                      >
                        −
                      </span>
                      {w}
                    </div>
                  ))}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#7C3AED",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      marginBottom: 12,
                    }}
                  >
                    Top Research Partners
                  </div>
                  {country.collab.map((col, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 12,
                          marginBottom: 4,
                        }}
                      >
                        <span style={{ fontWeight: 600, color: "#1E293B" }}>
                          {col.c}
                        </span>
                        <span style={{ color: "#94A3B8" }}>
                          {(col.v / 1000).toFixed(0)}K articles
                        </span>
                      </div>
                      <div
                        style={{
                          height: 4,
                          background: "#F1F5F9",
                          borderRadius: 2,
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${(col.v / country.collab[0].v) * 100}%`,
                            background: "#7C3AED",
                            borderRadius: 2,
                            opacity: 1 - i * 0.15,
                            transition: "width 0.4s ease",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Leaderboard, sticky ── */}
          <div style={{ position: "sticky", top: 24 }}>
            <div style={{ ...card, padding: "18px 16px" }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#1E293B",
                  marginBottom: 3,
                }}
              >
                Country Leaderboard
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 16 }}>
                Top 15 · click to explore
              </div>

              {[...COUNTRIES]
                .sort((a, b) => a.rank - b.rank)
                .slice(0, 15)
                .map((c, i) => {
                  const isSelected = selected === c.code;
                  return (
                    <div
                      key={c.code}
                      onClick={() => setSelected(c.code)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 10px",
                        borderRadius: 9,
                        cursor: "pointer",
                        marginBottom: 2,
                        background: isSelected ? "#EFF6FF" : "transparent",
                        borderLeft: `3px solid ${isSelected ? "#2563EB" : "transparent"}`,
                        transition: "background 0.15s",
                      }}
                    >
                      {/* Rank badge */}
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          width: 22,
                          textAlign: "center",
                          flexShrink: 0,
                          color:
                            i === 0 ? "#2563EB" : i < 3 ? "#DC2626" : "#CBD5E1",
                        }}
                      >
                        {c.rank}
                      </span>

                      {/* Score bar background */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: isSelected ? "#1E40AF" : "#1E293B",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {c.name}
                        </div>
                        <div
                          style={{
                            position: "relative",
                            height: 3,
                            background: "#F1F5F9",
                            borderRadius: 2,
                            marginTop: 4,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              height: "100%",
                              width: `${(c.score / 80) * 100}%`,
                              background:
                                i === 0
                                  ? "#2563EB"
                                  : i < 3
                                    ? "#DC2626"
                                    : "#94A3B8",
                              borderRadius: 2,
                              opacity: 0.6,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: 9,
                            color: "#94A3B8",
                            marginTop: 2,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {c.sub}
                        </div>
                      </div>

                      {/* Score + trend */}
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: isSelected ? "#2563EB" : "#1E293B",
                          }}
                        >
                          {c.score}
                        </div>
                        <div
                          style={{
                            fontSize: 9,
                            fontWeight: 600,
                            color: parseFloat(c.ch) > 0 ? "#059669" : "#DC2626",
                          }}
                        >
                          {c.ch}
                        </div>
                      </div>
                    </div>
                  );
                })}

              <div
                style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px solid #ECEAE3",
                  fontSize: 10,
                  color: "#CBD5E1",
                  textAlign: "center",
                }}
              >
                {COUNTRIES.length} countries indexed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
