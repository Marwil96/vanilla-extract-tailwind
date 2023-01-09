import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../theme/sprinkles.css";
import { vars, responsive, responsiveArray } from "../../theme/theme.css";

const layoutVariants = ({ breakpoint }: responsiveArray) => {
  return {
    grid: atoms({ padding: { [breakpoint]: 12 } }),
    flex: atoms({ padding: { [breakpoint]: 12 } }),
    flexColumn: atoms({ padding: { [breakpoint]: 12 } }),
  };
};

export const button = recipe({
  base: [atoms({ borderRadius: "none" })],

  variants: {
    layout: layoutVariants({ breakpoint: responsive.sm }),
    layoutDesktop: layoutVariants({ breakpoint: responsive.lg }),
  },

  defaultVariants: {
    layout: "flexColumn",
    layoutDesktop: "flex",
  },
});
