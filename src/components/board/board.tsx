import { BoardProps } from "./board.types";
import { Position } from "./position";

const Board = ({ positions }: BoardProps) => {
  return positions.map((row, index) => (
    <div key={index} className="flex flex-col">
      {row.map((position) => (
        <Position key={index} color={position === 0 ? "black" : "white"}>
          <></>
        </Position>
      ))}
    </div>
  ));
};

export { Board };
