/**
 * solution1: 每次 move 以后二维数组进行扫描。
 * solution2:
 *    记录所有满足赢的条件，每次 MOVE 计算是否满足，满足就赢了。
 *    所以需要记录所有的横向、纵向（记录到数组）、斜对角增加记录。
 *    【斜对角判断】：[[0,0],[1,1],[2,2]] => 差为 0； [[2,0],[1,1],[0,2]] => 和为 n-1
 * datastructure:
 * // TODO: 数据结构过于复杂，容易出错，应该拆数组
 *    grid[n + 2][n + 2]： 棋盘grid[n][n]，后面 2 个分别首占本行的玩家，以及占用个数。下标分别是 n, n + 1
 *    cross[[2],[2]]：分别记录斜对角、反斜对角的 player 和 counter
 * API：
 *    move(x, y, player)
 *  Coding 19:46 - 20:52
 */
class TicTacToe {
  constructor (n) {
    this._len = n;
    this._buildGrid(n);
  }

  clear () {
    this._buildGrid(this._len);
  }

  _buildGrid (n) {
    this.grid = new Array(n + 2);
    // TODO: 会指向同一个 array
    for (let i = 0; i < n + 2; i ++) {
      this.grid[i] = new Array(n + 2);
    }
    this.cross = [[], []];
    this._filledCount = 0;
    this._finished = false;
  }

  move (x, y, player) {
    if (this._finished) {
      throw new Error('Play a new game after clear!');
    }
    const n = this._len;
    if (this.grid[x][y] !== undefined || x < 0 || y < 0 || x > n - 1 || y > n - 1) {
      throw new Error('Can not move!');
    } else {
      this.grid[x][y] = player;
      this._filledCount++;
      this._judge();
    }

    if (this.grid[x][n] === undefined) {
      this.grid[x][n] = player;
      this.grid[x][n + 1] = 1;
    } else if (this.grid[x][n] === player) {
      this.grid[x][n + 1]++;

      if (this.grid[x][n + 1] === n) {
        this._finished = true;
        return player;
      }
    }

    if (this.grid[n][y] === undefined) {
      this.grid[n][y] = player;
      this.grid[n + 1][y] = 1;
    } else if (this.grid[n][y] === player) {
      if (++this.grid[n + 1][y] === n) {
        this._finished = true;
        return player;
      }
    }

    if (x - y === 0) {
      if (this.cross[0][0] === undefined) {
        this.cross[0][0] = player;
        this.cross[0][1] = 1;
      } else if (this.cross[0][0] === player){
        if (++this.cross[0][1] === n) {
          this._finished = true;
          return player;
        }
      }
    }

    if (x + y === n - 1) {
      if (this.cross[1][0] === undefined) {
        this.cross[1][0] = player;
        this.cross[1][1] = 1;
      } else if (this.cross[1][0] === player){
        if (++this.cross[1][1] === n) {
          this._finished = true;
          return player;
        }
      }
    }

    return 0;
  }

  _judge () {
    if (this._filledCount === this._len * this._len) {
      return `The game is over, all winners!`
    }
  }
}


/**
 * TestCase
 * 1. 基本功能： 每个棋位都能到；棋盘外不能走；赢了以后不能继续走；可以清空棋盘
 * 2. 赢了；2 赢了；没有输赢
 * 3. 界限： x, y 可能过界
 */

const toe = new TicTacToe(3);

console.log(toe.move(0, 0, 1)); // 0
console.log(toe.move(0, 2, 2)); // 0
console.log(toe.move(2, 2, 1)); // 0
console.log(toe.move(1, 1, 2)); // 0
console.log(toe.move(2, 0, 1)); // 0
console.log(toe.move(1, 0, 2)); // 0
console.log(toe.move(2, 1, 1)); // 1
 