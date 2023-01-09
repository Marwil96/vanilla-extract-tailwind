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
        background: { default: "baseWhite", hover: "baseWhite" },
        color: { default: "baseWhite", hover: "baseWhite" },
      }),
      brand: atoms({
        background: { default: "baseWhite", hover: "baseWhite" },
        color: { default: "baseWhite", hover: "baseWhite" },
      }),
      accent: atoms({
        background: "baseWhite",
        color: { default: "baseWhite", hover: "baseWhite" },
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
