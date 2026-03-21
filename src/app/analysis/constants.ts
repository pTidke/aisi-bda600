export const FONT = "'Josefin Sans', sans-serif";

export const COUNTRY_COLORS: Record<string, string> = {
  "United States": "#5B9BD5",
  China: "#ED7D7D",
  Japan: "#7EC8C8",
  "United Kingdom": "#9B59B6",
  Germany: "#D5A6BD",
  France: "#3498DB",
  Canada: "#E74C3C",
  India: "#F5A623",
  "South Korea": "#C4A484",
  Italy: "#1ABC9C",
  Australia: "#F39C12",
  Netherlands: "#FF9F43",
  Finland: "#4CD964",
  Switzerland: "#E8637A",
  Ireland: "#4C8BF5",
  Singapore: "#54A0FF",
  Austria: "#FFCC00",
  Taiwan: "#70AD47",
  Spain: "#E67E22",
  Russia: "#95A5A6",
  Indonesia: "#54A0FF",
  "Saudi Arabia": "#2ECC71",
  Europe: "#4CD964",
};

export const REGION_COLORS: Record<string, string> = {
  "Asia-Pacific": "#ED7D7D",
  Americas: "#5B9BD5",
  Europe: "#4CD964",
  Oceania: "#F39C12",
  Other: "#A9AFBB",
};

export const RESOURCE_COLORS: Record<string, string> = {
  "Design Resource": "#5cb85c",
  "Material Resource": "#f0a832",
  Process: "#e8756a",
  "Tool Resource": "#5b9bd5",
};

export const FIELD_COLORS: Record<string, string> = {
  "Artificial intelligence": "#5B9BD5",
  "Computer vision": "#7EC8C8",
  "Chip design and fabrication": "#ED7D7D",
  Cybersecurity: "#F5A623",
  Robotics: "#C4A484",
  "Natural language processing": "#9B59B6",
  "Large language models": "#4CD964",
  "AI safety": "#54A0FF",
};

export const STANCE_COLORS: Record<string, string> = {
  Enabling: "#4CD964",
  Restrictive: "#ED7D7D",
  Balanced: "#F5A623",
  Neutral: "#94A3B8",
};

export const CHART_THEME = {
  axis: {
    ticks: {
      text: {
        fontSize: 12,
        fontFamily: FONT,
        fill: "#64748B",
      },
    },
    legend: {
      text: {
        fontSize: 14,
        fontFamily: FONT,
        fontWeight: 600,
        fill: "#0F172A",
      },
    },
  },
  labels: {
    text: {
      fontSize: 12,
      fontFamily: FONT,
      fill: "#334155",
    },
  },
  legends: {
    text: {
      fontSize: 12,
      fontFamily: FONT,
      fill: "#64748B",
    },
  },
  tooltip: {
    container: {
      background: "#ffffff",
      color: "#334155",
      fontSize: 12,
      fontFamily: FONT,
      borderRadius: "6px",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      padding: "8px 12px",
    },
  },
};
