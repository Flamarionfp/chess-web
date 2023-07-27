import { verifyIsOdd } from "@/utils";

class Board {
  public static DIMENSION = 8;
  public positions: Array<Array<number>> = [[]];

  private init() {
    this.positions = new Array(Board.DIMENSION).fill(null);
    this.positions.forEach((_, index) => {
      this.positions[index] = new Array(Board.DIMENSION).fill(null);
    });

    for (let row = 0; row < Board.DIMENSION; row++) {
      let isOdd: boolean;

      for (let column = 0; column < Board.DIMENSION; column++) {
        isOdd = verifyIsOdd(column);

        this.positions[row][column] = isOdd ? 1 : 0;
      }

      isOdd = verifyIsOdd(row);

      if (isOdd) this.positions[row] = this.positions[row].reverse();
    }
  }

  constructor() {
    this.init();
  }
}

export { Board };
