import { PositionProps } from "./board.types";

export const Position = ({ color, children }: PositionProps) => (
  <div className={`bg-${color} w-10 h-10 flex justify-center items-center`}>
    {children}
  </div>
);
