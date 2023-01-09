import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../theme/sprinkles.css";

const fontSizeVariants = ({ breakpoint }: { breakpoint: string }) => {
  return {
    small: atoms({ fontSize: { [breakpoint]: 15 } }),
    medium: atoms({ fontSize: { [breakpoint]: 12 } }),
    large: atoms({ fontSize: { [breakpoint]: 12 } }),
  };
};

export const heading = recipe({
  base: [atoms({ borderRadius: "none" })],

  variants: {
    fontSizeDesktop: fontSizeVariants({ breakpoint: "lg" }),
    fontSize: fontSizeVariants({ breakpoint: "sm" }),
  },

  defaultVariants: {
    fontSize: "medium",
    fontSizeDesktop: "large",
  },
});
