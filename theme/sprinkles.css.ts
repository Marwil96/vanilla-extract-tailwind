import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars, responsive } from "./theme.css";

const borderWidth = {
  0: "0px",
  1: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
};

const responsiveStyles = defineProperties({
  conditions: {
    default: {},
    sm: { "@media": `screen and (min-width: ${responsive.sm})` },
    md: { "@media": `screen and (min-width: ${responsive.md})` },
    lg: { "@media": `screen and (min-width: ${responsive.lg})` },
    xl: { "@media": `screen and (min-width: ${responsive.xl})` },
    "2xl": { "@media": `screen and (min-width: ${responsive["2xl"]})` },
  },
  defaultCondition: "default",
  properties: {
    position: ["absolute", "relative", "fixed", "sticky"],
    display: ["none", "flex", "inline-flex", "block", "inline", "grid"],
    flexDirection: ["row", "column"],
    flexShrink: [0],
    gap: vars.space,
    cursor: [
      "pointer",
      "default",
      "text",
      "move",
      "not-allowed",
      "grab",
      "grabbing",
      "zoom-in",
      "zoom-out",
    ],
    textTransform: ["uppercase", "lowercase", "capitalize", "none"],
    rowGap: vars.space,
    columnGap: vars.space,
    aspectRatio: {
      square: "1 / 1",
      "16/9": "16 / 9",
      "4/3": "4 / 3",
      "3/4": "3 / 4",
      "21/9": "21 / 9",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    boxShadow: vars.shadow,
    top: vars.space,
    left: vars.space,
    bottom: vars.space,
    right: vars.space,
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    transition: {
      none: "none",
      all: "all 0.2s ease-in-out",
      default:
        "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out, fill 0.2s ease-in-out, stroke 0.2s ease-in-out, opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out",
      colors:
        "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out, fill 0.2s ease-in-out, stroke 0.2s ease-in-out",
      opacity: "opacity 0.2s ease-in-out",
      shadow: "box-shadow 0.2s ease-in-out",
      transform: "transform 0.2s ease-in-out",
    },
    borderWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderBottomWidth: borderWidth,
    listStyleType: ["none", "disc", "decimal"],
    height: vars.space,
    width: vars.space,
    minHeight: {
      0: "0",
      full: "100%",
      screen: "100vh",
    },
    maxWidth: {
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      "100%": "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
    },
    inset: [0],
    grid: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorStyles = defineProperties({
  conditions: {
    default: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "default",
  properties: {
    color: vars.colors,
    borderColor: vars.colors,
    background: vars.colors,
    backgroundColor: vars.colors,
    transform: {
      none: "none",
      rotate: "rotate(1turn)",
      "rotate-45": "rotate(45deg)",
      "rotate-90": "rotate(90deg)",
      "rotate-180": "rotate(180deg)",
      "rotate-270": "rotate(270deg)",
      "translate-x-1": "translateX(0.25rem)",
      "translate-x-2": "translateX(0.5rem)",
      "translate-x-3": "translateX(0.75rem)",
      "translate-x-4": "translateX(1rem)",
      "translate-x-5": "translateX(1.25rem)",
      "translate-x-6": "translateX(1.5rem)",
      "translate-x-8": "translateX(2rem)",
      "translate-x-10": "translateX(2.5rem)",
      "translate-x-12": "translateX(3rem)",
      "translate-x-16": "translateX(4rem)",
      "translate-x-20": "translateX(5rem)",
      "translate-x-24": "translateX(6rem)",
      "translate-x-32": "translateX(8rem)",
      "translate-x-40": "translateX(10rem)",
      "translate-x-48": "translateX(12rem)",
      "translate-x-56": "translateX(14rem)",
      "translate-x-64": "translateX(16rem)",
      "translate-x-px": "translateX(1px)",
      "translate-x-full": "translateX(100%)",
      "translate-y-1": "translateY(0.25rem)",
      "translate-y-2": "translateY(0.5rem)",
      "translate-y-3": "translateY(0.75rem)",
      "translate-y-4": "translateY(1rem)",
      "translate-y-5": "translateY(1.25rem)",
      "translate-y-6": "translateY(1.5rem)",
      "translate-y-8": "translateY(2rem)",
      "translate-y-10": "translateY(2.5rem)",
      "translate-y-12": "translateY(3rem)",
      "translate-y-16": "translateY(4rem)",
      "translate-y-20": "translateY(5rem)",
      "translate-y-24": "translateY(6rem)",
      "translate-y-32": "translateY(8rem)",
      "translate-y-40": "translateY(10rem)",
      "translate-y-48": "translateY(12rem)",
      "translate-y-56": "translateY(14rem)",
      "translate-y-64": "translateY(16rem)",
      "translate-y-px": "translateY(1px)",
      "translate-y-full": "translateY(100%)",
      "scale-0": "scale(0)",
      "scale-50": "scale(0.5)",
      "scale-75": "scale(0.75)",
      "scale-90": "scale(0.9)",
      "scale-95": "scale(0.95)",
      "scale-100": "scale(1)",
      "scale-105": "scale(1.05)",
      "scale-110": "scale(1.1)",
      "scale-125": "scale(1.25)",
      "scale-150": "scale(1.5)",
      "scale-200": "scale(2)",
      "scale-x-0": "scaleX(0)",
    },
  },
});

export const atoms = createSprinkles(responsiveStyles, colorStyles);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
