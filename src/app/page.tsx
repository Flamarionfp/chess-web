import { Board } from "@/domain/board";

export default function Home() {
  const board = new Board();

  console.log(board.positions);

  return <main></main>;
}
