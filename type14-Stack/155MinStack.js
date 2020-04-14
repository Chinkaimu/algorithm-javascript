/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  const min = this.data.length === 0 ? x : this.data[this.data.length - 1].min;
  this.data.push({
    val: x,
    min: Math.min(min, x)
  });
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.data.length > 0) {
    this.data.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  const len = this.data.length;
  if (len > 0) {
    return this.data[len - 1].val;
  }
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.data[this.data.length - 1].min;
};

/** 
* Your MinStack object will be instantiated and called as such:
*/
 var obj = new MinStack()
obj.push(3)
obj.pop()
obj.push(-2)
obj.push(-3)
var param_3 = obj.top()
var param_4 = obj.getMin()

