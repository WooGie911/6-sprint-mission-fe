const colors = {
  primary: {
    100: "#3692FF",
    200: "#1967D6",
    300: "#1251AA",
  },
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  red: "#F74747",
  white: "#FFFFFF",
  black: "#111827",
};

const mediaQuery = {
  mobile: "screen and (max-width: 768px)",
  tablet: "screen and (max-width: 1280px)",
};

const typography = {
  text3xl: {
    bold: {
      fontSize: "32px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    semibold: {
      fontSize: "32px",
      lineHeight: "42px",
      fontWeight: 600,
    },
  },
  text2xl: {
    bold: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 700,
    },
    semibold: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 500,
    },
    regular: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 400,
    },
  },
  textXl: {
    bold: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 700,
    },
    semibold: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 500,
    },
    regular: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 400,
    },
  },
  text2lg: {
    bold: {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 700,
    },
    semibold: {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 500,
    },
    regular: {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 400,
    },
  },
  textLg: {
    bold: {
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 700,
    },
    semibold: {
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 500,
    },
    regular: {
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 400,
    },
  },
  textMd: {
    bold: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    semibold: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    regular: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
    },
  },
  textSm: {
    semibold: {
      fontSize: "13px",
      lineHeight: "22px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "13px",
      lineHeight: "22px",
      fontWeight: 500,
    },
  },
  textXs: {
    semibold: {
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: 500,
    },
    regular: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: 400,
    },
  },
};

const theme = {
  colors,
  mediaQuery,
  typography,
};

export default theme;
