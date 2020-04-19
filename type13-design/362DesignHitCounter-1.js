function HitCounter () {
  this.hits = [];

  this.hit = function (timestamp) {
    removeTimeoutHits(this.hits, timestamp, 5);
    this.hits.unshift(timestamp);
    // 算出坐标，然后 count++
  }

  this.getHits = function (timestamp) {
    removeTimeoutHits(this.hits, timestamp, 5);
    // TODO: 这里会有问题，可能一个点打多次
    return this.hits.length;
  }
}

function removeTimeoutHits (hits, timestamp, minewhile) {
  const startTime = timestamp - minewhile * 60;

  // find the first one larger the startTime
  // length = i + 1
  let i;
  for (i = hits.length - 1; i >= 0; i--) {
    if (hits[i] > startTime) {
      return hits.length = i + 1;
    }
  }

  if (i === -1) {
    return [];
  }
}

const counter = new HitCounter();

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
