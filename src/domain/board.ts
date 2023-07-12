import { verifyIsOdd } from "@/utils";

class Board {
  public static DIMENSION = 8;
  public positions: Array<Array<number>> = [[]];

  private init() {
    this.positions = new Array(Board.DIMENSION).fill(null);
    this.positions.forEach((_, index) => {
      this.positions[index] = new Array(Board.DIMENSION).fill(null);
    });

    for (let i = 0; i < Board.DIMENSION; i++) {
      for (let j = 0; j < Board.DIMENSION; j++) {
        const isOdd = verifyIsOdd(j);

        this.positions[i][j] = isOdd ? 1 : 0;
      }
    }
  }

  constructor() {
    this.init();
  }
}

export { Board };
