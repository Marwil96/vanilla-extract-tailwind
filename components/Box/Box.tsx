import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { vars, responsive, responsiveArray } from "../../theme/theme.css";

export interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  layout?: "flex" | "grid" | "block" | "flex-row" | "flex-column";
  layoutDesktop?: "flex" | "grid" | "block" | "flex-row" | "flex-column";
}

// type PolymorphicBox = Polymorphic.ForwardRefComponent<"div", Props>;

// export type BoxProps = Polymorphic.OwnProps<PolymorphicBox>;

export const Box = ({
  className,
  as: Component = "div",
  style,
  children,
}: BoxProps) => (
  <Component className={className} style={{ ...style }}>
    {children}
  </Component>
);

Box.displayName = "Box";
