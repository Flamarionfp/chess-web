import { Board as BoardComponent } from "@/components/board/board";
import { Board } from "@/domain/board";

export default function Home() {
  const board = new Board();

  return (
    <main className="h-screen flex justify-center items-center">
      <BoardComponent positions={board.positions} />
    </main>
  );
}
