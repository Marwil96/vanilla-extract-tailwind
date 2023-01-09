import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import { vars } from "../../theme/theme.css";
import { Box, BoxProps } from "../Box/Box";
import { atoms, Atoms } from "../../theme/sprinkles.css";

interface Props {
  grid?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  columnsDesktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rowsDesktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  areas?: string[];
  area?: string;
  displayName?: string;
  gapY?: any;
  gapX?: any;
}

//Combining Polymorphic and BoxProps so we can use box component as a grid easier
interface PolymorphicGrid extends Props, BoxProps {}

export type GridProps = Polymorphic.OwnProps<PolymorphicGrid>;

const Grid = (props: PolymorphicGrid) => {
  const {
    gapY = 4,
    gapX = 4,
    grid,
    area,
    areas,
    columns = 4,
    columnsDesktop = 12,
    rows = 4,
    rowsDesktop = 12,
    style,
    children,
    ...restProps
  } = props;

  return (
    <Box
      layout="grid"
      layoutDesktop="grid"
      className={atoms({
        columnGap: gapX,
        rowGap: gapY,
        gridTemplateColumns: { default: columns, lg: columnsDesktop },
        gridTemplateRows: { default: rows, lg: rowsDesktop },
        display: "grid",
      })}
      style={{ ...style }}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export { Grid };
Grid.displayName = "Grid";
