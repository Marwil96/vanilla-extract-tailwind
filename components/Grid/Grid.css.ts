import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { atoms } from "../../theme/sprinkles.css";

export const grid = recipe({
  base: [
    atoms({
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "base",
    }),
  ],

  variants: {
    color: {
      neutral: atoms({
        background: { default: "black", hover: "sky-100" },
        color: { default: "sky-100", hover: "sky-100" },
      }),
      brand: atoms({
        background: { default: "sky-100", hover: "sky-100" },
        color: { default: "white", hover: "white" },
      }),
      accent: atoms({
        background: "sky-100",
        color: { default: "sky-100", hover: "sky-100" },
      }),
    },
    size: {
      small: atoms({ padding: 4 }),
      medium: atoms({ padding: 4 }),
      large: atoms({ padding: "1/3" }),
    },
    fullWidth: {
      true: atoms({ width: "full" }),
    },
  },

  defaultVariants: {
    color: "accent",
    size: "medium",
    fullWidth: false,
  },
});

export type GridVariants = NonNullable<RecipeVariants<typeof grid>>;
