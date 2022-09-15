type Array2D = number[][] | undefined[][];
class Matrix {
  private rows: Array2D;
  private columns: Array2D;
  public readonly height: number;
  public readonly width: number;
  constructor(str: string) {
    this.rows = this.getRows(str);
    this.height = this.rows.length;
    this.width = this.rows[0].length;
    this.columns = Matrix.emptyMatrix(this.width, this.height);

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.columns[j][i] = this.rows[i][j];
      }
    }
  }
  private getRows(str: string): Array2D {
    return str.split("\n").map((row) => row.split(" ").map(Number));
  }

  static emptyMatrix(width: number, height: number): Array2D {
    const matrix = [];
    for (let i = 0; i < height; i++) {
      matrix.push(new Array(width));
    }
    return matrix;
  }
}
