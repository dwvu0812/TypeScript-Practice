class Squares {
  count: number;
  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.count; i++) {
      sum += i * i;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.count; i++) {
      sum += i;
    }

    return Math.pow(sum, 2);
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
