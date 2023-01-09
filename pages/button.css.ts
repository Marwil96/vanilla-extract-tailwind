import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../theme/sprinkles.css";

const marginVariants = ({ breakpoint }: { breakpoint: string }) => {
  return {
    small: atoms({ paddingTop: { [breakpoint]: 12 } }),
    medium: atoms({ padding: { [breakpoint]: 12 } }),
    large: atoms({ padding: { [breakpoint]: 12 } }),
  };
};

export const button = recipe({
  base: [atoms({ borderRadius: "none" })],

  variants: {
    marginTopDesktop: marginVariants({ breakpoint: "lg" }),
    marginTop: marginVariants({ breakpoint: "sm" }),
  },

  defaultVariants: {
    // size: "medium",
  },
});
