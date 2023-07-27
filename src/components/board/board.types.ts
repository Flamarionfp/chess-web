import React from "react";

type BoardProps = {
  positions: number[][];
};

type Color = "black" | "white";

type PositionProps = {
  color: Color;
  children: React.ReactNode;
};

export type { BoardProps, PositionProps };
