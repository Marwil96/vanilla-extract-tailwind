import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import { vars } from "../../theme/theme.css";
import { Box, BoxProps } from "../Box/Box";
import { atoms } from "../../theme/sprinkles.css";

interface Props {
  grid?: string;
  autoRows?: string;
  autoColumns?: string;
  columns?: string;
  rows?: string;
  columnsDesktop?: string;
  rowsDesktop?: string;
  areas?: string[];
  area?: string;
  displayName?: string;
  gapY?: {
    default?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
  };
  gapX?: {
    default?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
  };
}

//Combining Polymorphic and BoxProps so we can use box component as a grid easier
interface PolymorphicGrid extends Props, BoxProps {}

export type GridProps = Polymorphic.OwnProps<PolymorphicGrid>;

export const Grid = ((props: PolymorphicGrid) => {
  const {
    gapY = { default: vars.space[4], sm: vars.space[6] },
    gapX = { default: vars.space[4], sm: vars.space[6] },
    grid,
    area,
    areas,
    columns = "4",
    columnsDesktop = "12",
    rows = "4",
    rowsDesktop = "12",
    autoRows,
    autoColumns = "auto",
    style,
    children,
    ...restProps
  } = props;

  return (
    <Box
      layout="grid"
      // placeContent={place}
      className={atoms({
        columnGap: { sm: gapX },
        rowGap: { sm: gapY },
        gridTemplateColumns: { sm: 1 },
        gridTemplateRows: { sm: 1 },
        gridAutoRows: autoRows,
        gridAutoColumns: autoColumns,
        gridTemplateAreas: areas?.length ? `'${areas.join(`' '`)}'` : undefined,
      })}
      style={{ ...style }}
      {...restProps}
    >
      {children}
    </Box>
  );
}) as PolymorphicGrid;

Grid.displayName = "Grid";
