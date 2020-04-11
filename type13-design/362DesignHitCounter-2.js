/**
 * endIndex = timestamp - this.headTime(headTime in place index)
 * endIndex should not overstep this.total - 1
 */

class HitCounter {
  constructor (minwhile) {
    this.total = minwhile;
    this.hits = new Array(this.total);
    this.hits.fill(0);
    this.headTime = null;
  }

  hit (timestamp) {
    if (this.headTime === null) {
      this.hits[0]++;
      this.headTime = timestamp;
    } else {
      if (timestamp - this.headTime > this.total - 1) {
        this._arrangeHits(timestamp);
      }
  
      // headTime is in the place index 0
      this.hits[timestamp - this.headTime]++;
    }
  }

  getHits (timestamp) {
    let endIndex = timestamp - this.headTime;
    if (endIndex > this.total - 1) {
      this._arrangeHits(timestamp);
      endIndex = this.total - 1;
    }
    let sum = 0;
    for (let i = 0; i <= endIndex; i++) {
      sum += this.hits[i];
    }

    return sum;
  }

  _arrangeHits (timestamp) {
    // endIndex = timestamp - this.headTime
    // last index of hits = this.total - 1
    // delete count = endIndex - lastIndex
    const toDelete = timestamp - this.headTime - this.total + 1;
    const startIndex = this.total - toDelete;

    this.hits.splice(0, toDelete);

    this.hits.length = this.total;
    this.headTime = timestamp - this.total + 1;

    this.hits.fill(0, startIndex);
  }
}

const counter = new HitCounter(300);

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
console.log(counter.getHits(4));

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
console.log(counter.getHits(300));

// get hits at timestamp 301, should return 3.
console.log(counter.getHits(301)); 

