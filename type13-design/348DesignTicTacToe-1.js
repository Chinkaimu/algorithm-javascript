/**
 * solution1: 每次 move 以后二维数组进行扫描。
 * solution2:
 *    记录所有满足赢的条件，每次 MOVE 计算是否满足，满足就赢了。
 *    所以需要记录所有的横向、纵向（记录到数组）、斜对角增加记录。
 *    【斜对角判断】：[[0,0],[1,1],[2,2]] => 差为 0； [[2,0],[1,1],[0,2]] => 和为 n-1
 * datastructure: 
 *    grid[n][n]： 棋盘grid[n][n]，后面 2 个分别首占本行的玩家，以及占用个数。下标分别是 n, n + 1
 *    rows[n]： 记录行的 count
 *    cols[n]： 记录列的 count
 *    diagonal：斜对角的 count
 *    antiDiagonal：反斜对角的 count
 * API：
 *    move(x, y, player)
 *  Coding 21:40 - 22:00; 10:54 - 11:02
 */
// TODO: 通过不同的操作行为区分 player

class TicTacToe {
  constructor (n) {
    this._capacity = n;
    this._buildGame(n);
  }

  clear () {
    this._buildGame(this._capacity);
  }


  move (x, y, player) {
    if (this.grid[x][y] !== undefined) {
      throw new Error('It is occupied! Can not move!')
    }

    if (this.player1 === undefined) {
      // increase
      this.player1 = player;
    } else if (this.player2 === undefined) {
      // decrease
      this.player2 = player;
    }

    if (this.player1 === player) {
      if (++this.rows[x] === this._capacity || ++this.cols[y] === this._capacity || ++this.diagonal === this._capacity) {
        return this.player1;
      }
    } else if (this.player2 === player) {
      if (--this.rows[x] === -this._capacity || --this.cols[y] === -this._capacity || --this.diagonal === -this._capacity) {
        return this.player2;
      }
    } else {
      throw new Error('No more than 2 players!')
    }

    return 0;
  }

  _buildGame (n) {
    this.grid = new Array(n);
    for (let i = 0; i < n; i++) {
      this.grid[i] = new Array(n);
    }

    this.rows = new Array(n);
    this.rows.fill(0);
    this.cols = new Array(n);
    this.cols.fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
    this.player1;
    this.player2;
  }
}

const toe = new TicTacToe(3);

console.log(toe.move(0, 0, 1)); // 0
console.log(toe.move(0, 2, 2)); // 0
console.log(toe.move(2, 2, 1)); // 0
console.log(toe.move(1, 1, 2)); // 0
console.log(toe.move(2, 0, 1)); // 0
console.log(toe.move(1, 0, 2)); // 0
console.log(toe.move(2, 1, 1)); // 1

