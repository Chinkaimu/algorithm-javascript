function randomSort(array) {
  var result = [];
  var len = array.length;
  for(var i = 0; i < len; i++) {
      var num = Math.floor(Math.random()*array.length);
      result.push(array[num]);
      array.splice(num,1);
  }
  return result;
}